// <div className="pa4 pa5-m pa6-l">
//   <div className="tc">
//     <img className="logo" src="/static/images/logo_whitesq.png" />
//   </div>
//   <div className="tc">
//     <a className="call-to-action no-underline dib ph3 pv2 mt5" href="#">REGISTER NOW!</a>
//   </div>
// </div>

export default () =>
  <header className="db cover bg-center">

    <style jsx>{`
      header {
        background-image: url('/static/images/header_bg.png')
        min-height: 720px;
        height: 100vh;
        background: blue;
      }

      img.logo {
        width: 300px;
        box-shadow: -10px 10px black;
      }

      a.call-to-action {
        color: #FFF;
        background-color: #FEDA44;
        box-shadow: -5px 5px black;
        text-shadow: -1px 1px #FF9911;
      }
    `}</style>
  </header>
