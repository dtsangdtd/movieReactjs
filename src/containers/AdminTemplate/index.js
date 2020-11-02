import React from 'react';
import { Route } from 'react-router-dom';
import NavbarAdmin from '../../components/NavbarAdmin';
function AdminLayout(props) {
  return (
    <div>
      <NavbarAdmin />
      {props.children}
    </div>
  );
}
export default function AdminLayout({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <AdminTemplate>
          <Component {...propsComponent} />
        </AdminTemplate>
      )}
    />
  );
}
