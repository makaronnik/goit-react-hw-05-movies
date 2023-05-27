import Main from 'components/Layout/Main';
import Header from 'components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense
          fallback={
            <MoonLoader speedMultiplier={0.5} cssOverride={{ margin: 50 }} />
          }
        >
          <Outlet />
        </Suspense>
      </Main>
      <ToastContainer theme="colored" />
    </>
  );
};

export default Layout;
