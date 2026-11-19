let total = 0;

function addExpense() {
  let name = document.getElementById('name').value;
  let amount = parseInt(document.getElementById('amount').value);
  let category = document.getElementById('category').value;

  if (!name || !amount) { alert("Please enter name and amount!"); return; }

  total += amount;
  document.getElementById('total').innerText = total;

  let li = document.createElement('li');
  li.innerHTML = `<span>${category} - ${name}</span> <b>₹${amount}</b>`;
  document.getElementById('list').appendChild(li);

  // AI TIP LOGIC
  let tip = document.getElementById('ai-tip');
  if (total > 5000) tip.innerText = "⚠️ AI Tip: You have crossed ₹5000! Try to save. Stop extra shopping.";
  else if (category === "Food" && amount > 500) tip.innerText = "🍔 AI Tip: Food expense is high today. Try cooking at home tomorrow.";
  else if (total > 2000) tip.innerText = "💡 AI Tip: You are spending a bit more. Keep track daily!";
  else tip.innerText = "✅ AI Tip: Good! You are spending within budget. Keep it up!";

  document.getElementById('name').value = "";
  document.getElementById('amount').value = "";
}

function clearAll() {
  total = 0;
  document.getElementById('total').innerText = 0;
  document.getElementById('list').innerHTML = "";
  document.getElementById('ai-tip').innerText = "Add your first expense to get AI Tip 👇";
}
