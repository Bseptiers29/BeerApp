import Header from './Header';

const layoutStyle = {
    margin : 20,
    padding : 20,
    border : '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout


/* Methode 1  : MyLayout est le composent "supérieur"
const withLayout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <Page />
        </div>
    );
};

export default withLayout;
*/

/* Methode 2 : Page Content en props
const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.content}
    </div>
);

export default Layout;
*/

