import { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./LikeButton.css";

export default function LikeButton({ pageId }) {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [animating, setAnimating] = useState(false);

  const storageKey = `liked_${pageId}`;

  useEffect(() => {
    setLiked(localStorage.getItem(storageKey) === "true");
  }, [storageKey]);

  useEffect(() => {
    const ref = doc(db, "likes", pageId);
    const unsub = onSnapshot(ref, (snap) => {
      setCount(snap.exists() ? snap.data().count : 0);
    });
    return () => unsub();
  }, [pageId]);

  const handleLike = async () => {
    if (loading) return;
    setLoading(true);

    const ref = doc(db, "likes", pageId);
    const snap = await getDoc(ref);

    if (liked) {
      await updateDoc(ref, { count: increment(-1) });
      localStorage.removeItem(storageKey);
      setLiked(false);
    } else {
      if (snap.exists()) {
        await updateDoc(ref, { count: increment(1) });
      } else {
        await setDoc(ref, { count: 1 });
      }
      localStorage.setItem(storageKey, "true");
      setLiked(true);
      // アニメーション発火
      setAnimating(true);
      setTimeout(() => setAnimating(false), 1000);
    }

    setLoading(false);
  };

  return (
    <div className="like-wrapper">
      <div
        className={`goodBtn ${animating ? "active" : ""}`}
        onClick={handleLike}
      >
        <FontAwesomeIcon
          icon={faHeart}
          className="fa-heart"
          style={{ color: liked ? "red" : "#777" }}
        />
      </div>
    </div>
  );
}