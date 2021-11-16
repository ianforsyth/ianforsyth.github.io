import CenteredLayout from '../components/CenteredLayout'
import Layout from '../components/Layout'
import { H1, H2, P, UL } from '../components/UI'

const GonzoPage = () => (
  <Layout title="Gonzo">
    <CenteredLayout>
      <H1 className="text-center">Gonzo</H1>

      <H2>Feeding</H2>
      <UL>
        <li>
          Gonzo eats 2 cups of kibble for breakfast and 2 cups for dinner. He tends to
          eat slowly and get distracted (we're working on that) so if he doesn't finish
          a meal, that's okay.
        </li>
        <li>
          I typically give him one raw hide a day, usually after his dinner as a way to
          calm him down for the night. You can give it to him anytime that's convenient though.
          Just please make sure he's supervised with it so he doesn't accidentally choke.
        </li>
        <li>
          I'll make sure to include some treats with his things as well. Feel free to give him
          those to reinforce good behaviors or when he listens to commands.
        </li>
      </UL>

      <H2>Commands</H2>
      <UL>
        <li>
          We're still working on reliability with all his commands, especially in distracting
          situations, but he knows: sit, down, stay, come, leave it, drop it.
        </li>
        <li>
          He has a few tricks: high five (when sitting), take a bow, spin
        </li>
        <li>
          He's learning to "heel" on the right and that should be a focused walk
          with no sniffing or leaving your side.
        </li>
        <li>
          If he gets really distracted by a smell on a walk, you can usually snap him out of it
          with a "Let's Go"
        </li>
      </UL>

      <H2>Play</H2>
      <P>
        Gonzo is an energetic bread but it's pretty easy to tire him out. You can do pretty much anything with him, I just
        ask he's always on his leash or long lead if he's in an unfenced area. He's not reliable off-leash yet.
      </P>
      <UL>
        <li>
          He plays well with other dogs, you're welcome to take him to the dog park
          or socialize him friends' pets.
        </li>
        <li>
          He's getting better at fetch. He'll usually chase after a toy (especially squeaky ones) but might need some
          coaxing and encouragement to actually bring it back especially if there are a lot
          of distractions around.
        </li>
        <li>
          He loves a good game of tug.
        </li>
        <li>
          Feel free to take him hiking or on longer walks. He's done 4-6 miles before if it's not too hot out.
        </li>
      </UL>

      <H2>Behavior</H2>
      <P>
        We're actively working on all these bad behaviors but they are something to keep an eye
        on
      </P>
      <UL>
        <li>
          Other dogs: he loves other dogs, is very friendly, and loves to play. But, that can be annoying
          on walks because he'll pull and lunge towards them. It's fine with me if he says hi to other dogs
          but he can get overexcited and you may need to pull him away. Sometimes you can get him into a "heel"
          to walk by them and not even egage if you don't want to deal with it.
        </li>
        <li>
          Counter surfing: if there's food out or being prepared he will sometimes jump up and put
          his paws on the counter. He should respond to a stern "Off!" command but if he doesn't
          feel free to push him away.
        </li>
        <li>
          Howling: he is a coonhound which is a relatively vocal breed but we're trying not to let
          the howling get out of control. It's okay if he's playing with other dogs but not okay to
          howl at people or dogs just walking by or in sight. You can stear him away from whatever he's
          howling at to redirect him or give him a "No, quiet!" command.
        </li>
        <li>
          Humping: this is a new behavior (as of 9/2021) but he may try to hump dogs if he gets excited
          during play. We're working on an "Off!" command but it's not reliable yet. It's okay to pull him
          off, ask for a sit/down, and pause play for a bit to calm him down. He is being neutered 10/2021
          to hopefully help with this.
        </li>
        <li>
          If he's behaving poorly, one of the best ways to calm him down is to put his leash on and tether
          him to something sturdy. He'll whine for a bit but eventually calm down. Feel free to use this as
          much as you need to.
        </li>
      </UL>

      <H2>Habits</H2>
      <P>
        These are just here so you know what he's used to. You 100% make the rules for your home and routine
        and he should follow them when he's a guest
      </P>
      <UL>
        <li>
          I allow him to be on the furniture if he's relaxing (no eating or playing) and I don't let him on the bed.
          He knows "Off!" if you don't wanthim on anything.
        </li>
        <li>
          He sleeps at night in his dog bed.
        </li>
        <li>
          We typically go out for a short walk in the morning (sometime between 7am and 8am), then go to the park for 30
          minutes around noon to play fetch and run around, then a more training-focused walk in the evening (sometime
          between 4pm and 6pm). He'll usually pee and poop on all those outings and then I take him out just to pee
          before bed around 9pm.
        </li>
      </UL>
    </CenteredLayout>
  </Layout>
)

export default GonzoPage
