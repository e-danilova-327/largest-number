const first = 500;
const second = 1000;
const third = 123;
const fourth = -200;
const fifth = -5710;

if (first > second && first > third && first > fourth && first > fifth) {
    console.log(first);
} else if (second > first && second > third && second > fourth && second > fifth) {
    console.log(second);
} else if (third > first && third > second && third > fourth && third > fifth) {
    console.log(third);
} else if (fourth > first && fourth > second && fourth > third && fourth > fifth) {
    console.log(fourth);
} else {
    console.log(fifth);
}