import Footer from './Footer';
import '../styles/BaseStep.scss';
export default function BaseStep(props) {

  return (
    <div className="base-step">
      {props.children}
      <Footer/>
    </div>
  )
}
