import React from 'react'
import Link from 'next/link'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <section className="vh-100">
        <div className="tc">
          <Link href="/">
            <img className="w5 mt5" src="/static/images/logo.png" />
          </Link>
        </div>
        <style jsx>{`img { cursor: pointer; }`}</style>
        <h1 className="tc f1 f-headline-l mb3">404</h1>
        <h2 className="tc f1-l">
          {this.props.statusCode === 404
            ? `Page Not Found`
            : 'Something went wrong...'}
        </h2>
      </section>
    )
  }
}
