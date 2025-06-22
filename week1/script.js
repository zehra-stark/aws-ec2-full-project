const allQuestions = [
  {
    question: "What does EC2 stand for?",
    options: [
      "Elastic Compute Cloud",
      "Elastic Cluster Core",
      "Extended Cloud Control",
      "Elastic Core Cloud"
    ],
    answer: 0
  },
  {
    question: "Which port is used for SSH?",
    options: ["22", "80", "443", "3306"],
    answer: 0
  },
  {
    question: "Which instance type is free tier eligible?",
    options: ["t2.micro", "m5.large", "c5.xlarge", "p3.2xlarge"],
    answer: 0
  },
  {
    question: "Which pricing model is best for short-term, interruption-tolerant workloads?",
    options: ["Spot", "Reserved", "On-Demand", "Dedicated"],
    answer: 0
  },
  {
    question: "Which of the following is NOT a valid EC2 instance family?",
    options: ["t", "m", "z", "d"],
    answer: 3
  },
  {
    question: "How do you connect to EC2 from local terminal?",
    options: ["RDP", "FTP", "SSH", "SCP"],
    answer: 2
  },
  {
    question: "What does an IAM role provide for EC2?",
    options: ["User login", "Access to AWS services", "Billing info", "Domain registration"],
    answer: 1
  },
  {
    question: "Where are web files served from in Apache?",
    options: ["/etc/httpd/", "/var/www/html/", "/home/ec2-user/", "/usr/share/"],
    answer: 1
  },
  {
    question: "Which tool can monitor EC2 performance?",
    options: ["CloudTrail", "CloudWatch", "S3", "Route 53"],
    answer: 1
  },
  {
    question: "How can you restrict EC2 access to only your IP?",
    options: ["IAM policy", "NACL", "Security group rule", "Subnet ACL"],
    answer: 2
  }
];

// Shuffle and pick 3 random questions
const quizData = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 3);

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[current];
  document.getElementById("question").innerText = q.question;

  const options = document.getElementById("options");
  options.innerHTML = "";

  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    li.innerText = opt;
    li.onclick = () => {
      if (i === q.answer) score++;
      nextQuestion();
    };
    options.appendChild(li);
  });
}

function nextQuestion() {
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").innerText = `Your score: ${score}/${quizData.length}`;
    document.querySelector("button").style.display = "none";
  }
}

window.onload = loadQuestion;

