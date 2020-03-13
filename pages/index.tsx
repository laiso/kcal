import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import {NextPage} from 'next'

const firebase = require('firebase/app');
require('firebase/firestore');

import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '30px',
  },
});

let IndexPage: NextPage = () => {
  const classes = useStyles();
  return (
      <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js v0.0.1</h1>
        <div className={classes.root}>
          Second Title
        </div>
        <Link href="/about">
          <Button variant="contained" color="primary">
            About
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="contained" color="primary">
            About
          </Button>
        </Link>
        <Records/>
      </Layout>
  )
}

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: 'kcal-prod'
  });
}

class Records extends React.Component<any, any> {
  async componentDidMount() {
    var db = firebase.firestore();
    const snap = await db.collection(`records`).get()
    for(const doc of snap.docs) {
      console.log(doc);
    }
  }

  render() {
    return <React.Fragment>
      <p>records</p>
    </React.Fragment>
  }
}

export default IndexPage
