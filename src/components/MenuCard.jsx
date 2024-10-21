const MenuCard = ({ img, title, desc, price, category }) => {
  console.log(title);
  return (
    <div className="card bg-base-100 w-96 shadow-xl ring-2 ring-secondary">
      <figure className="h-60 w-full">
        <img src={img} alt={title} className="object-fit" />
      </figure>
      <div className="card-body flex justify-between">
        <h2 className="card-title">
          {title}
          <div className="badge badge-accent">R{price}</div>
        </h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline text-accent">{category}</div>
        </div>
      </div>
    </div>
  );
};
export default MenuCard;
