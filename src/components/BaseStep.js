import Footer from './Footer';
import '../styles/BaseStep.scss';
export default function BaseStep(props) {

  return (
    <div className="base-step">
      <div className="content-wrap">
      {props.children}
      </div>
      <Footer/>
    </div>
  )
}
