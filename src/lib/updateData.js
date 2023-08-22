export async function updateNews(newInfo) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const data = {
    _id: newInfo._id,
    title: newInfo.title,

    titleEn: newInfo.titleEn,

    meta_title: newInfo.meta_title,

    description: newInfo.description,

    date: newInfo.date,

    image: newInfo.image,

    categories: newInfo.categories,

    tags: newInfo.tags,

    draft: newInfo.draft,

    content: newInfo.content,

    contentEn: newInfo.contentEn,
  };
  const res = await fetch("http://localhost:3000/api/new", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updateUsers(user) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch("http://localhost:3000/api/user", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updateCompanyInfo(company) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch("http://localhost:3000/api/company", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(company),
  });
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updateCustomer(customer) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  customer["type"] = "Customer";
  const res = await fetch("http://localhost:3000/api/customer", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updatePartner(partner) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  partner["type"] = "Partner";
  const res = await fetch("http://localhost:3000/api/partner", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(partner),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updateProduct(product) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const data = {
    title: product.title,

    titleEn: product.titleEn,

    type: product.type,

    description1: product.description1,

    description2: product.description2,

    descriptionEn1: product.descriptionEn1,

    descriptionEn2: product.descriptionEn2,

    image: product.image,

    pros: product.pros.split(/\s*,\s*/),

    prosEn: product.prosEn.split(/\s*,\s*/),

    content: product.content,
  };

  const res = await fetch("http://localhost:3000/api/product", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}
export async function updateBanner(banner) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const posts = await loadNews()
  const res = await fetch("http://localhost:3000/api/banner", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(banner),
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
}