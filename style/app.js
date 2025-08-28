let heartCount = 0;

function heartCountValue() {
  heartCount++;
  document.getElementById("output").innerText = heartCount;
}

document.getElementById("heart_plus-1").addEventListener("click", function () {
  heartCountValue("heart_plus-1");
});

document.getElementById("heart_plus-2").addEventListener("click", function () {
  heartCountValue("heart_plus-2");
});
document.getElementById("heart_plus-3").addEventListener("click", function () {
  heartCountValue("heart_plus-3");
});
document.getElementById("heart_plus-4").addEventListener("click", function () {
  heartCountValue("heart_plus-4");
});
document.getElementById("heart_plus-5").addEventListener("click", function () {
  heartCountValue("heart_plus-5");
});
document.getElementById("heart_plus-6").addEventListener("click", function () {
  heartCountValue("heart_plus-6");
});
document.getElementById("heart_plus-7").addEventListener("click", function () {
  heartCountValue("heart_plus-7");
});
document.getElementById("heart_plus-8").addEventListener("click", function () {
  heartCountValue("heart_plus-8");
});
document.getElementById("heart_plus-9").addEventListener("click", function () {
  heartCountValue("heart_plus-9");
});

let coin = 100;

let callHistry = [];

function makeCall(serviceName, number) {
  if (coin === 0) {
    alert("কল করার জন্য পর্যাপ্ত পরিমাণ কয়েন নাই");
    return;
  }

  alert(`Calling... ${serviceName} Number : ${number}`);

  coin -= 20;
  if (coin < 0) coin = 0;
  document.getElementById("coin").innerText = " " + coin;

  const data = {
    name: serviceName,
    number: number,
    date: new Date().toLocaleTimeString(),
  };
  callHistry.push(data);

  const callHistryContainar = document.getElementById("call-histry-containar");
  const div = document.createElement("div");
  div.innerHTML = `
   <div class="bg-[#FAFAFA] mt-3 px-5 py-7 rounded-xl mx-1.5">
        <div class="call_history">
            <div class="flex justify-between items-center">
                <div class="flex flex-col">
                    <div class="call_title">${data.name}</div>
                    <div class="call_description">${data.number}</div>
                </div>
                <div class="call_time">${data.date}</div>
            </div>
        </div>
    </div>
  `;
  callHistryContainar.appendChild(div);
}

document.getElementById("callBtn-1").addEventListener("click", function () {
  makeCall("জাতীয় জরুরি সেবা", "999");
});

document.getElementById("callBtn-2").addEventListener("click", function () {
  makeCall("পুলিশ", "999");
});
document.getElementById("callBtn-3").addEventListener("click", function () {
  makeCall("ফায়ার সার্ভিস", "999");
});
document.getElementById("callBtn-4").addEventListener("click", function () {
  makeCall("অ্যাম্বুলেন্স", "1994-999999");
});
document.getElementById("callBtn-5").addEventListener("click", function () {
  makeCall("নারী ও শিশু সহায়তা", "109");
});
document.getElementById("callBtn-6").addEventListener("click", function () {
  makeCall("দুদক", "106");
});
document.getElementById("callBtn-7").addEventListener("click", function () {
  makeCall("বিদ্যুৎ বিভ্রাট", "16216");
});
document.getElementById("callBtn-8").addEventListener("click", function () {
  makeCall("ব্র্যাক", "16445");
});
document.getElementById("callBtn-9").addEventListener("click", function () {
  makeCall("বাংলাদেশ রেলওয়ে", "163");
});

document.getElementById("clear-histry").addEventListener("click", function () {
  callHistry = [];
  document.getElementById("call-histry-containar").innerText = "";
  alert("কল হিস্ট্রি ক্লিয়ার করা হয়েছে!");
});

// Oto Akta Bujlam Na catgpt tak ha hlpe nea korlam
let copyCount = 0;

document.addEventListener("click", async (e) => {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;

  const card = btn.closest(".bg-white");
  const target = card?.querySelector(".copy-text");
  const text = target?.innerText.trim();

  if (!text) {
    alert("Nothing to copy: .copy-text not found");
    return;
  }

  async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  }

  const original = btn.innerHTML;
  btn.disabled = true;
  try {
    await copyToClipboard(text);
    btn.innerHTML = "Copy";

    copyCount++;
    const counter = document.getElementById("copyCount");
    if (counter) counter.innerText = copyCount;
  } catch (err) {
    console.error(err);
    btn.innerHTML = "Copy failed";
    alert("Copy failed! Use HTTPS or supported browser.");
  } finally {
    setTimeout(() => {
      btn.innerHTML = original;
      btn.disabled = false;
    }, 1000);
  }
});
