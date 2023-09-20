import Link from "next/link";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import { applySession } from "next-session";

const s = {
  aboutButton: {
    margin: 10
  }
};

const Page = ({ name }) => (
  <div>
    <Head>
      <title>Test App | Index</title>
    </Head>
    Home view, hello {name}!
    <Link href="/about" prefetch>
      <Button style={s.aboutButton} variant="outlined" color="primary">
        About
      </Button>
    </Link>
  </div>
);

Page.getInitialProps = async ({ req, res }) => {
  // on page load of /, this should redirect to /foo
  await applySession(req, res, { autoCommit: true }); // make autoCommit: false and it will correctly redirect

  // for some reason I need to redirect...
  res.writeHead(302, { Location: '/foo' }).end()

  return {
    name: "Jairo"
  };
};

export default Page;
