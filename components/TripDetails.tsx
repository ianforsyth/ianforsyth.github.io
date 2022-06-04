import Layout from "./Layout"
import cn from "classnames"

const H1 = ({ className, ...props }: React.ComponentProps<"div">) => <div {...props} className={cn(className, "text-4xl font-semibold")} />
const H2 = ({ className, ...props }: React.ComponentProps<"div">) => <div {...props} className={cn(className, "text-2xl mt-6 font-semibold")} />
const A = ({ className, ...props }: React.ComponentProps<"a">) => <a {...props} className={cn(className, "text-primary")} target="_blank" rel="noopener noreferrer" />
const P = ({ className, ...props }: React.ComponentProps<"div">) => <div {...props} className={cn(className, "mt-2")} />
const UL = ({ className, ...props }: React.ComponentProps<"ul">) => <ul {...props} className={cn(className, "mt-2")} />
const LI = ({ className, ...props }: React.ComponentProps<"li">) => <li {...props} className={cn(className, "ml-6 list-disc")} />

export const TripDetails = ({ title, party, dateStart, dateEnd, itinerary, otherDetails, children }: { 
  title: string, 
  dateStart: string,
  dateEnd: string,
  party: string[],
  itinerary: { item: string, link?: string, linkName?: string }[],
  children: React.ReactNode,
  otherDetails?: string[],
}) => {
  return (
    <Layout title={title}>
      <div className="p-10 font-lato max-w-5xl mx-auto">
        <H1>{title}</H1>
        <P>{dateStart} - {dateEnd}</P>
        <H2>Party</H2>
        <UL>
          {party.map(person => <LI className="list-disc ml-6">{person}</LI>)}
        </UL>
        <H2>Itinerary</H2>
        <UL>
          {itinerary.map(({ item, link, linkName }) => <LI>{item}{link && <span> - <A href={link}>{linkName || "link"}</A></span>}</LI>)}
        </UL>
        {otherDetails?.length && (
          <>
            <H2>Other Details</H2>
            <UL>
              {otherDetails.map(detail => <LI>{detail}</LI>)}
            </UL>
          </>
        )}
        <H2>Emergency Contact Info</H2>
        <P>
          Cell service may be limited. We&apos;ll have a satellite communication device with us for safety. If there's an 
          emergency and you need to contact us, you can 
          <A href="http://share.garmin.com/ianforsyth"> visit my tracking page </A> 
          (password track-ian). There&apos;s an option to message us from there. We&apos;ll be checking for messages three 
          times a day (first thing in the morning, lunch break, and before turning in for the night). We&apos;ll also be 
          able to send messages or an SOS to search and rescue in a worst case scenario.
        </P>
        <P className="mt-8 text-sm font-bold">
          *Feel free to share this page with family and friends.
        </P>
      </div>
    </Layout>
  );
}
