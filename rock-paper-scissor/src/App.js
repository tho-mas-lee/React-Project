import "./App.css";
import Box from "./component/Box";
import { useState } from "react";
const choice = {
	rock: {
		name: "Rock",
		img: "https://www.thoughtco.com/thmb/-sPFzJ8-4wY2phZc0OtK6RDMWX0=/4518x2541/smart/filters:no_upscale()/rhyolite-1057171452-5c911d4b46e0fb000187a397.jpg",
	},
	scissors: {
		name: "Scissors",
		img: "https://media.istockphoto.com/photos/blue-scissors-picture-id182187746?k=20&m=182187746&s=612x612&w=0&h=s8U4JMxgKKmFTmnXZfHtb80uKla_1oTEBpb17q9w7hc=",
	},
	paper: {
		name: "Paper",
		img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
	},
};
function App() {
	const [userSelect, setUserSelect] = useState(null);
	const [computerSelect, setComputerSelect] = useState(null);
	const [result, setResult] = useState("");
	const play = (userChoice) => {
		//버튼 클릭시 작동하는 함수
		setUserSelect(choice[userChoice]);
		let computerChoice = randomChoice();
		setComputerSelect(choice[computerChoice]);
		setResult(judgment(choice[userChoice], choice[computerChoice]));
	};

	const randomChoice = () => {
		// 컴퓨터가 뽑는 것을 랜덤으로 결정해 주는 함수
		let choiceList = Object.keys(choice);
		let randomItem = Math.floor(Math.random() * 3);
		let final = choiceList[randomItem];
		return final;
	};
	const judgment = (user, computer) => {
		//승패를 결정 하는 함수
		if (user.name === computer.name) {
			return "tie";
		} else if (user.name === "Rock") {
			return computer.name === "Scissors" ? "win" : "lose";
		} else if (user.name === "Scissors") {
			return computer.name === "Paper" ? "win" : "lose";
		} else if (user.name === "Paper") {
			return computer.name === "Rock" ? "win" : "lose";
		}
	};
	return (
		<div>
			<div className="main">
				<Box title="You" item={userSelect} result={result} />
				<Box title="Computer" item={computerSelect} result={result} />
			</div>
			<div className="main">
				<button
					onClick={() => {
						play("rock");
					}}
				>
					<i class="fa-regular fa-hand-back-fist"></i>
				</button>
				<button
					onClick={() => {
						play("scissors");
					}}
				>
					<i class="fa-regular fa-hand-scissors"></i>
				</button>
				<button
					onClick={() => {
						play("paper");
					}}
				>
					<i class="fa-regular fa-hand"></i>
				</button>
			</div>
			<h1 className="main">{result}</h1>
		</div>
	);
}

export default App;
