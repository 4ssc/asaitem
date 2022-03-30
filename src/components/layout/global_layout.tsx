import { FC } from "react";
import GlobalFooter from '../footer/global_footer';
import GlobalHeader from '../header/global_header';

const GlobalLayout: FC = ({children}) => {
  return (
    <>
      <GlobalHeader />
      <div className="container">
        <main>{children}</main>
      </div>
      <GlobalFooter />
    </>
  );
};

export default GlobalLayout;
