import Link from "next/link";
import Header from "./Header";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-8 gap-4">
        <aside
          data-testid="aside-nav-bar"
          className="flex flex-col h-screen bg-black fixed items-center p-2 space-y-12"
        >
          <div className="flex-grow"></div>
          <Link href="/vote">
            <a>
              <i style={{ fontSize: "32px" }} className="bi bi-bank m-2"></i>
            </a>
          </Link>
          <Link href="/">
            <a>
              <i style={{ fontSize: "32px" }} className="bi bi-house m-2"></i>
            </a>
          </Link>
          <Link href="/propose">
            <a>
              <i
                style={{ fontSize: "32px" }}
                className="bi bi-pencil-square m-2"
              ></i>
            </a>
          </Link>
          <div className="flex-grow"></div>
        </aside>
        <div className="flex items-center col-start-2 col-end-9 mt-48">
          <div className="space-y-12 p-8 md:p-12 md:pr-24">
            <p>Welcome Home</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut finibus augue, vel auctor diam. Sed aliquet quam vitae neque
              tempor, non rhoncus tellus condimentum. Ut lorem ipsum, lobortis
              eu erat ut, consectetur sodales nisi. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; Nam id
              augue a quam fringilla placerat tincidunt id tortor. Mauris
              ultrices tellus in metus placerat, vitae bibendum magna tristique.
              Quisque egestas non urna eget lacinia. Curabitur a auctor mi. Cras
              blandit ligula mauris. Integer eu odio augue. Quisque nec erat
              lorem. Praesent finibus nisl at felis venenatis, vulputate semper
              risus maximus. Nam eu tristique ligula. Quisque ultrices felis
              nunc, a ultrices justo tempor eget. Vivamus pellentesque, velit
              tempor eleifend pharetra, tellus diam condimentum nisl, quis
              posuere erat eros vitae velit. Nullam scelerisque massa ac
              pulvinar accumsan. Ut eget maximus sem, non fermentum quam. Duis
              at tristique mauris. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Etiam consequat pretium
              mattis. Curabitur cursus augue nec tincidunt mollis. Vivamus
              vulputate mollis enim, vel dignissim dui iaculis in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
