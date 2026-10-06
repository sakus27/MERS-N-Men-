(function () {
  const main = document.getElementById("menu");
  const nav = document.getElementById("catnav");
  const fmt = p => (p == null ? "Fiyat için sorunuz" : "₺" + Number(p).toLocaleString("tr-TR"));

  // Resim: önce yerel dosya, yoksa eski sitedeki orijinal, o da yoksa yer tutucu.
  function image(item) {
    const img = new Image();
    img.alt = item.name; img.loading = "lazy"; img.decoding = "async";
    let step = 0;
    img.onerror = () => {
      step++;
      if (step === 1 && item.img.indexOf("tavuk-") > -1) img.src = OLD_SITE + item.img;
      else { img.remove(); wrap.classList.add("card__media--empty"); wrap.textContent = "Fotoğraf yakında"; }
    };
    const wrap = document.createElement("div");
    wrap.className = "card__media";
    wrap.appendChild(img);
    img.src = item.img;
    return wrap;
  }

  MENU.forEach(cat => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${cat.id}" data-id="${cat.id}">${cat.title}</a>`;
    nav.appendChild(li);

    const sec = document.createElement("section");
    sec.className = "cat"; sec.id = cat.id;
    sec.innerHTML = `<h2>${cat.title}</h2>`;
    const grid = document.createElement("div");
    grid.className = "grid";
    if (!cat.items.length) {
      grid.innerHTML = `<p class="empty">Bu bölümün ürünleri yakında eklenecek.</p>`;
    }
    cat.items.forEach(item => {
      const card = document.createElement("article");
      card.className = "card";
      card.appendChild(image(item));
      const body = document.createElement("div");
      body.className = "card__body";
      body.innerHTML = `<h3>${item.name}</h3><p>${item.desc}</p><strong class="price">${fmt(item.price)}</strong>`;
      card.appendChild(body);
      grid.appendChild(card);
    });
    sec.appendChild(grid);
    main.appendChild(sec);
  });

  // Aktif kategori vurgusu + sekmeyi görünür tut
  const links = [...nav.querySelectorAll("a")];
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => {
        const on = a.dataset.id === e.target.id;
        a.classList.toggle("active", on);
        if (on) a.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
      });
    });
  }, { rootMargin: "-30% 0px -65% 0px" });
  document.querySelectorAll(".cat").forEach(s => io.observe(s));
})();
