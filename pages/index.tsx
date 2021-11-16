import CenteredLayout from '../components/CenteredLayout'
import Layout from '../components/Layout'
import { H1, P, A } from '../components/UI'

const IndexPage = () => (
  <Layout>
    <CenteredLayout>
      <H1 className="text-center">Ian Forsyth</H1>
      <P>
        I'm a full-stack engineer based in Boulder, CO. Right now I'm helping to build{" "}
        <A href="https://www.relaypayments.com/">Relay</A>{" "}
        and before that I was part of the great teams at{" "}
        <A href="https://www.teamengine.io/">Team Engine</A>{" "}
        and{" "}
        <A href="https://www.vts.com/">VTS</A>.{" "}
        On the side I maintain{" "}
        <A href="https://prpatrol.com/">PR Patrol</A>.{" "}
        When I'm not in front of the computer, you'll find me outside trail
        running, cycling, skiing, and hanging with my dog Gonzo.
      </P>
      <P>
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
