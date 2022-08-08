import React from "react";

const Box = (props) => {
	let result;
	//YOU 칸과 COMPUTER 칸의 승패를 반대로 나타나게 하는 조건식
	if (
		props.title === "Computer" &&
		props.result !== "tie" &&
		props.result !== ""
	) {
		result = props.result === "win" ? "lose" : "win";
	} else {
		result = props.result;
	}
	return (
		<div className={`box ${result}`}>
			<h1>{props.title}</h1>
			<h2>
				{props.item && props.item.name
					? props.item.name
					: props.title === "Computer"
					? "랜덤으로 선택됩니다."
					: "하단의 버튼을 눌러주세요."}
			</h2>
			<img
				className="item_img"
				src={
					props.item && props.item.img
						? props.item.img
						: "https://thumb.ac-illust.com/ad/ad459b63959bb411d2f42c08aa41e5f1_t.jpeg"
				}
				alt="주먹 가위 보"
			/>
			<h2>{result}</h2>
		</div>
	);
};

export default Box;
