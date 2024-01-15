import React from "react";

const Tarjeta = ({ avatar, name, email, role }) => {
  return (
    <section className="tarjeta_section">
      <div className="tarjeta">
        <img src={avatar} />
        <div className="info">
          <h1>Nombre: {name}</h1>
          <h3>Rol: {role}</h3>
          <h3>Email: {email}</h3>
        </div>
      </div>
    </section>
  );
};

export default Tarjeta;
