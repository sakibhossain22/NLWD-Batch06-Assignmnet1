১. TypeScript-এ Interfaces এবং Types এর মধ্যে পার্থক্য

TypeScript-এ interface এবং type দুটোই ব্যবহার করা হয় একটি অবজেক্ট বা ডেটার গঠন নির্দিষ্ট করতে। তবে এদের মধ্যে কিছু সূক্ষ্ম পার্থক্য আছে।

ব্যবহারের ক্ষেত্র

Interface মূলত অবজেক্টের গঠন বা Shape বর্ণনা করতে ব্যবহৃত হয়।
কিন্ত Type অবজেক্ট সহ ভিবিন্ন প্রিমিটিভ ডাটা ইউনিয়ন টুপল ফাংশন এও ব্যবহার করা যায়

interface কে extends দিয়ে এক বা একাধিক ইন্টারফেসকে inherit করা যায়।

type কে & (intersection) দিয়ে extend এর মত কাজ করা হয়।

--------------interface example----------------------
interface User {
  id: number;
  name: string;
}
--------------Type example----------------------

type UserType = {
  id: number;
  name: string;
}
<!-- ---------------------------------------------------------->

২. TypeScript-এ keyof কীওয়ার্ডের ব্যবহার

keyof হল TypeScript এর একটি অপারেটর যা কোনো টাইপের সবগুলো প্রপার্টির key একটি ইউনিয়ন টাইপ হিসাবে রিটার্ন করে।

type User = {
  id: number
  name: string
  email: string
}

type UserKeys = keyof User;  
আউটপুট হবে 🧡 // "id" | "name" | "email"

