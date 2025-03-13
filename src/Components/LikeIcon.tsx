import { useState } from "@lynx-js/react";
import redHeart from "../Pictures/redHeart.png";
import whiteHeart from "../Pictures/whiteHeart.png";
import "../Index.css";


export default function LikeIcon() {
  const [isLiked, setIsLiked] = useState(false);
  const onTap = () => {
    setIsLiked(!isLiked);
  };
  return (
    <view className="like-icon" bindtap={onTap}>
      {isLiked && <view className="circle" />}
      {isLiked && <view className="circle circleAfter" />}
      <image src={isLiked ? redHeart : whiteHeart} className="heart-love" />
    </view>
  );
}
