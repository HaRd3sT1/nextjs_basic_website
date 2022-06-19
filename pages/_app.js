// import { Provider } from 'react-redux'
// import { useStore } from '../store'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState)
  // const persistor = persistStore(store, {}, function () {
  //   persistor.persist()
  // })
  return <Component {...pageProps} />
  // return (
  //   // <Provider store={store}>
  //     //  {/* loading={<div>loading</div>} */}
  //   // {/* <PersistGate  persistor={persistor}> */}
  // // {/* </PersistGate> */}
  //   // </Provider>
  // )
}
