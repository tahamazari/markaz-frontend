import { useContext } from 'react';

import { Layout } from "../../components"
import { AppContext } from "../../context"

const Settings = () => {
  const { data } = useContext(AppContext);
  const { currentUser: { name = "" } = {} } = data
  return(
    <Layout>
      <div className="text-blue-600">Hello {name.split(' ')[0]}!</div>
      Settings
    </Layout>
  )
}

export default Settings