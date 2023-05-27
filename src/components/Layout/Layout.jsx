import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import { MoonLoader } from 'react-spinners';
import { Outlet } from 'react-router-dom';
import Main from 'components/Layout/Main';
import Header from 'components/Header/Header';
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
