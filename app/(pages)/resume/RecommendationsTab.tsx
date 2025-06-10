import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function RecommendationsTab() {
    return (
      <>
        <div id="Recommendations" className="flex flex-wrap md:flex-nowrap gap-10 pb-8 mb-4 border-b border-dashed scroll-mt-28">
          <div className="w-full md:w-3/4">
            <h2 className="font-heading font-semibold text-2xl mb-8">Highly Recommended</h2>

            <div className="mb-12">
              <div className="mb-2 pl-6 pb-4 border-l-4 border-gray-500">
                <p className="mb-4">
                  “Jason is the perfect complement to any business or entrepreneur with a vision. He excels at taking big concepts and grand objectives and quickly transforming them into a detailed, functional application. During our time together at Peerless Network, Jason accomplished this first as a solo designer and developer and then shifted gears to leading a team that handled multiple projects simultaneously.
                </p>

                <p>
                  Jason's well-rounded skill set—coding, interface design, graphic design, and even copy-writing—combined with his can-do, helpful attitude ensure that any project he is involved with will be a success. I highly recommend Jason for your team!”
                </p>
              </div>

              <h4 className="font-heading text-[18] font-semibold">EVP, Products & Technology</h4>
              <em>Jason's boss</em>          
            </div>
            
            <div className="mb-12">
              <div className="mb-2 pl-6 pb-4 border-l-4 border-gray-500">
                <p className="mb-4">
                  “I had the pleasure of working with Jason for 5 years. During that time, he simultaneously carried the responsibility of project manager and team lead, all while being a daily contributor to the code base.
                </p>

                <p className="mb-4">
                  As a team lead Jason ensures that the team is always moving forward and that the product is always improving. He is constantly looking for ways to improve a code base and never hesitates to make himself available when a team member is struggling to overcome an obstacle.
                </p>

                <p className="mb-4">
                  The effectiveness of Jason’s leadership and his willingness to dive into any challenge our team faced allowed us to grow a prototype application into a core component of our company’s business operations.
                </p>

                <p>
                  Jason would be a great asset to any engineering team and I am thankful for having had the opportunity to work with him.”
                </p>
              </div>

              <h4 className="font-heading text-[18] font-semibold">Software Engineer</h4>
              <em>Jason's team member</em>
            </div>
          </div>

          <div className="w-full md:w-1/4">
            <Link href="https://www.linkedin.com/in/jasonpaxtoncooper" target="_blank" className="block mb-4 border border-gray-400 rounded-lg p-2 hover:text-white">
              More on LinkedIn
              <ChevronRightIcon fontSize="small" />
            </Link>
          </div>
        </div>
      </>
    );
  }
  