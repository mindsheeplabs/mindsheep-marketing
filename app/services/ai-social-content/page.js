import Topbar from "../../components/Topbar";
import StoryHead from "../../components/StoryHead";
import Bit from "../../components/Bit";
import Ticks from "../../components/Ticks";
import Faq from "../../components/Faq";
import Aside from "../../components/Aside";
import StoryEnd from "../../components/StoryEnd";
import Others from "../../components/Others";
import Close from "../../components/Close";

export const metadata = {
  title: "AI social and content",
  description:
    "Fresh video, posts and creative every week, made from your own photos, products and people. AI does the volume, a person checks every piece. Same budget, a lot more content.",
  alternates: { canonical: "/services/ai-social-content" },
};

const WHAT_YOU_GET = [
  "Short AI video for Facebook, Instagram and TikTok.",
  "Your photos upscaled and reworked.",
  "Posts and captions in your voice.",
  "Weekly creative, so your ads stay fresh.",
  "A person checks every piece.",
];

const FAQS = [
  {
    q: "Will it look AI-generated?",
    a: "Not if we do our job. It starts from your real photos and people. A person checks every piece, and anything that looks off does not go out.",
  },
  {
    q: "Do I have to be on camera?",
    a: "No. Most clients never film a thing. We work from the photos you already have. A few phone clips a month is plenty if you want to appear.",
  },
  {
    q: "Who approves what goes out?",
    a: "You choose. Approve every post, or set the rules once and read the monthly report. A person on our team reviews every piece either way.",
  },
  {
    q: "What do you need from me?",
    a: "Access to your social accounts, the photos on your phone, your logo, and an hour on a call so we hear how you talk about your work.",
  },
];

export default function AiSocialContentPage() {
  return (
    <>
      <Topbar />

      <main>
        <article className="story">
          <div className="plate">
            <StoryHead
              kicker="AI social and content"
              title="Fresh content every week, from your real business."
              lead="AI lets us make video, posts and creative at the pace Facebook, Instagram and TikTok reward, from your own photos, products and people."
            />

            <div className="story__body">
              <Bit title="What you get" id="what-you-get">
                <p>
                  We set it up, make it, check it and publish it. You see new content going out and
                  new enquiries coming in. <b>You never lift a camera.</b>
                </p>
                <Ticks items={WHAT_YOU_GET} ariaLabel="What you get" />
              </Bit>

              <Bit title="Not stock. Yours." id="not-stock">
                <p>
                  Stock photos are easy to spot, and your customers spot them. They want the shed
                  you built, the truck in your yard, the person who answers the phone. So we start
                  with what is real: your photos upscaled and cleaned, your products shown
                  properly. AI gives us the volume.{" "}
                  <b>The business in the picture is still yours.</b>
                </p>
              </Bit>

              <Bit title="How it works" id="how">
                <p>
                  <b>We collect what you have.</b> Photos on your phone, the words on your
                  website.
                </p>
                <p>
                  <b>We write down your voice.</b> How you talk, what you never say, which jobs you
                  want.
                </p>
                <p>
                  <b>AI makes the volume.</b> Video, posts and captions, far more than a person could
                  make by hand.
                </p>
                <p>
                  <b>We check and publish.</b> A person reviews every piece, then it goes out.
                </p>
              </Bit>

              <Bit title="Questions people ask" id="faq">
                <Faq items={FAQS} openFirst />
              </Bit>

              <Aside
                title="Want content every week?"
                body="A free 30 minute look at the photos you already have and what you could be posting, then a plain-words plan."
              />
            </div>
          </div>
        </article>

        <StoryEnd lead="Tell us what you have. We will show you what it could become.">
          <p>
            Bring the photos on your phone. You would be surprised how many weeks of content are
            already sitting in there.
          </p>
        </StoryEnd>

        <Others current="/services/ai-social-content" />
        <Close />
      </main>
    </>
  );
}
