// 1. Dinamik salam mesajı (sabahınız xeyir vs.)
const greetingText = document.createElement("p");
const hour = new Date().getHours();
if (hour < 12) {
  greetingText.textContent = "Sabahın xeyir, Ata!";
} else if (hour < 18) {
  greetingText.textContent = "Günün aydın, Ata!";
} else {
  greetingText.textContent = "Axşamın xeyir, Ata!";
}
document.body.prepend(greetingText);

// 2. Random ata mesajları (scrollun sonunda çıxır)
const ataSozleri = [
  "Ən böyük dəstəyim hər zaman sən olmusan.",
  "Sənin kimi ata bir dənədi.",
  "Səni çox istəyirəm, həmişə qürur duyacam.",
  "Sənin üçün nə etsəm azdı."
];

window.addEventListener("scroll", () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY + window.innerHeight;
  if (scrollTop >= scrollHeight - 20) {
    if (!document.getElementById("ataSozu")) {
      const mesaj = document.createElement("p");
      mesaj.id = "ataSozu";
      mesaj.textContent = ataSozleri[Math.floor(Math.random() * ataSozleri.length)];
      mesaj.style.marginTop = "30px";
      mesaj.style.fontStyle = "italic";
      document.body.appendChild(mesaj);
    }
  }
});
