import CenteredLayout from '../components/CenteredLayout'
import Layout from '../components/Layout'
import { H1, P, A } from '../components/UI'

const IndexPage = () => (
  <Layout>
    <CenteredLayout>
      <img src='/photo.png' className="m-auto" style={{ maxWidth: '250px' }} />
      <H1 className="text-center">Ian Forsyth</H1>
      <P>
        I'm a full-stack engineer based in Boulder, CO. Right now I'm helping to keep athletes connected at{" "}
        <A href="https://www.strava.com/">Strava</A>.{" "}
        Before that I worked at{" "}
        <A href="https://www.relaypayments.com/">Relay</A>{" "}
        and was part of the great early teams at{" "}
        <A href="https://www.teamengine.io/">Team Engine</A>{" "}
        and{" "}
        <A href="https://www.vts.com/">VTS</A>.{" "}
      </P>
<!--       
       <P>
        On the side I'm building and growing{" "}
        <A href="https://hoahq.co/">hoaHQ</A>{" "}
        and craft pieces for my woodworking brand{" "}
        <A href="https://maplevein.com/">Maple Vein</A>.
      <P> 
-->
      </P>
        When I'm not in front of the computer, you'll find me behind the 
        woodworking bench, hanging with my dog Gonzo, or 
        outside trail running, backpacking, and skiing.
      </P>
      <P className="text-xs">
        You can check out my code on
        <A href="https://github.com/ianforsyth">Github</A>,{" "}
        my designs on{" "}
        <A href="https://dribbble.com/ianforsyth">Dribble</A>,{" "}
        and my writing on{" "}
        <A href="https://medium.com/@ianforsyth">Medium</A>.
      </P>
    </CenteredLayout>
  </Layout>
)

export default IndexPage
