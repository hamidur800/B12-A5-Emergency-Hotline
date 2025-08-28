### My Answer :

## question 1 What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

## 1.Answer

**A. getElementById = স্পেসিফিক আইডিকে সিলেক্ট করা যায়,**
**B. getElementsByClassName =একসাথে অনেকগুলো ক্লাস কে সিলেক্ট করা যায়**
**B. querySelector =এটা দিয়ে প্রথম যেকোনো আইডি, ক্লাস অথবা ট্যাগকে সিলেক্ট করা যায়**
**B. querySelectorAll =এইটা দিয়ে একই নামের যত আইডি, ক্লাস অথবা ট্যাগ আছে সবগুলোকে একসাথে সিলেক্ট করা যায়**

## question 2 How do you **create and insert a new element into the DOM**?

## 2.Answer

**A. প্রথমে একটা এলিমেন্ট তৈরি করতে হবে | উদাহরণ : const container = document.createElement("div")**

**B.তারপর উপরের ওই "div" এ আপনি যা শো দেখাতে চান | উদাহরণ : container.innerText = "Hello World"**

**C. এটা এখন রেডি DOM এ দেখানোর জন্য অ্যাপেন্ড করলে হবে | উদাহরণ : document.body.appendChild(container)**

## question 3 What is **Event Bubbling** and how does it work?

## 3.Answer

**Event Bubbling হল এমন একটা মেথড যেটা ফলো করলে যে কোন ইভেন্ট ম্যানেজ করা যায় যেমন ক্লিক ইভেন্ট | উদাহরণ : document.getElementById("btn").addEventListener("click", function () {
console.log("Button Clickd!");
});**

## question 4 What is **Event Delegation** in JavaScript? Why is it useful?

## 4.Answer

**Event Delegation এটা দিয়ে parent element কে সিলেক্ট করে তার যত child element আছে সবগুলাকে কন্ট্রোল করা যায় যদি কোন নতুন child element এড করা হয় সেটা ডায়নামিকভাবে যোগ হয়ে যায়**

## question 5 What is the difference between **preventDefault() and stopPropagation()** methods?

## 5.Answer

**preventDefault() এটা কোনো এলিমেন্টের ডিফল্ট বিহেবিয়ার থামায়**
**stopPropagation() এটা কোনো evant কে parent এর দিকে যাওয়া বন্ধ করে**
