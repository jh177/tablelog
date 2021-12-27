import { connect } from "react-redux";
import Times from "./times";

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

export default connect(mSTP, null)(Times);