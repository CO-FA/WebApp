
import Button from "../components/commons/Button"
import {Link} from "react-router-dom"

export default function RegistroStep2(){
    return <>
    <header>
    <h1 className="my-3 text-center">Términos y condiciones</h1>    
  </header>
  <section>
    <div className="row text-left">
      <div className="col-12">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra semper metus, ac efficitur felis vehicula ac. Ut sed molestie turpis, et semper ante. Mauris eget dolor in libero semper fermentum sed ut eros. Nam pulvinar justo at magna tincidunt pulvinar. Vivamus sed nisi a nisi bibendum scelerisque quis ac enim. Suspendisse nulla diam, efficitur eget nibh et, pellentesque cursus velit. Nam rhoncus porttitor enim, nec egestas ipsum bibendum in. Vivamus mattis euismod felis sed feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam arcu ante, interdum id mauris eget, blandit hendrerit metus. Fusce vitae pulvinar metus, quis blandit est. Morbi non augue et enim commodo lobortis. Nunc consequat nibh quis pretium fermentum.</p>
        <p>Donec consectetur sem id pharetra accumsan. Donec volutpat congue augue eu ornare. Cras ullamcorper aliquam velit, sit amet fringilla felis commodo vitae. Morbi nec libero fringilla, iaculis augue vel, egestas augue. Proin non eros urna. Sed efficitur orci sit amet sapien pharetra, in pretium eros laoreet. Mauris lectus tellus, posuere sit amet imperdiet sit amet, lacinia quis lectus. Aliquam at neque arcu. Donec cursus, justo non eleifend semper, neque justo dictum leo, sit amet molestie justo nulla vitae lectus. Phasellus nec mi sed mauris euismod volutpat eget luctus neque. In hac habitasse platea dictumst. </p>
      </div>
    </div>
  </section>
  <footer>
    <div className="row text-center">
      <div className="col-12">
        <form className="form-signin">
          <Link to="/login">
             <Button className="btn btn-primary">Acepto</Button>
            </Link>
        </form>
      </div>
    </div>
  </footer>
    </>
}