import { projectThumbs } from '@/data/project-thumbs';
import { resumeContent as resumeData } from '@/data/resume-content';
import { markdownToPdfComponents } from '@/utlis/markdownToPDF';
import { Document, Page, Text, View, Link, Image } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';
import { pdfStyles, primaryColor } from './pdfStyles';

Font.registerHyphenationCallback(word => [word]);

Font.register({
  family: 'Nunito',
  src: '/fonts/Nunito-Regular.ttf',
});

Font.register({
  family: 'Nunito',
  src: '/fonts/Nunito-Italic.ttf',
  fontStyle: 'italic',
});

Font.register({
  family: 'Nunito',
  src: '/fonts/Nunito-Semibold.ttf',
});

Font.register({
  family: 'Nunito',
  src: '/fonts/Nunito-Bold.ttf',
  fontWeight: 'bold',
});

Font.register({
  family: 'Montserrat',
  src: '/fonts/Montserrat-Regular.ttf',
});

Font.register({
  family: 'Montserrat',
  src: '/fonts/Montserrat-SemiBold.ttf',
  fontWeight: 'bold',
});

const baseUrl = 'https://jasoncooper.site';

const recentProjects = [
  projectThumbs.hal9000,
  projectThumbs.jasonCooperSite,
  projectThumbs.peerlessPortal,
];

type Props = {
  hasJobDescription?: boolean;
  resumeContent?: typeof resumeData;
};

export default function ResumePdf({ hasJobDescription = false, resumeContent = resumeData }: Props) {
  const languagesAndFrameworks = resumeContent.skillsAndTech.skills.find(skill => skill.id === 'languages-and-frameworks');
  const tools = resumeContent.skillsAndTech.skills.find(skill => skill.id === 'tools');

  return (
    <Document title="Jason Cooper | Resumé" author="Jason Cooper">
      <Page size="LETTER" orientation="landscape" style={pdfStyles.page}>
        <View style={[pdfStyles.flexRowContainer, { justifyContent: 'space-between', alignItems: 'center' }]}>
          <Text style={pdfStyles.title}>Jason Cooper</Text>
          <View style={[pdfStyles.title, pdfStyles.flexRowContainer, { fontSize: 18, color: 'black', alignItems: 'center' }]}>
            <Text>Designer</Text>
            <Text style={{ color: primaryColor, paddingHorizontal: 6, fontSize: 26 }}>&</Text>
            <Text>Developer</Text>
          </View>
        </View>

        <View style={pdfStyles.flexRowContainer}>
          <View style={{ width: '50%', marginRight: 60 }}>
            <View style={[pdfStyles.section]}>
              <View style={[pdfStyles.flexRowContainer, pdfStyles.contactRow]}>
                <Text style={[pdfStyles.label, { width: 80 }]}>Portfolio</Text>
                <Link src={baseUrl} style={pdfStyles.link}>{baseUrl}</Link>
              </View>
              <View style={[pdfStyles.flexRowContainer, pdfStyles.contactRow]}>
                <Text style={[pdfStyles.label, { width: 80 }]}>LinkedIn</Text>
                <Link src="https://www.linkedin.com/in/jasonpaxtoncooper/" style={pdfStyles.link}>https://www.linkedin.com/in/jasonpaxtoncooper/</Link>
              </View>
              <View style={[pdfStyles.flexRowContainer, pdfStyles.contactRow]}>
                <Text style={[pdfStyles.label, { width: 80 }]}>Phone</Text>
                <Text>(706) 255-2417</Text>
              </View>
              <View style={[pdfStyles.flexRowContainer, pdfStyles.contactRow]}>
                <Text style={[pdfStyles.label, { width: 80 }]}>Email</Text>
                <Link src="mailto:jasonpaxtoncooper@gmail.com" style={pdfStyles.link}>jasonpaxtoncooper@gmail.com</Link>
              </View>
              <View style={[pdfStyles.flexRowContainer, pdfStyles.contactRow]}>
                <Text style={[pdfStyles.label, { width: 80 }]}>Address</Text>
                <Text>
                  1480 Uncle Ben Drive,
                  Powder Springs, GA 30127
                </Text>
              </View>
            </View>

            <View style={pdfStyles.section}>
              <Text style={pdfStyles.heading}>
                {resumeContent.introduction.title}
              </Text>

              {markdownToPdfComponents(resumeContent.introduction.text)}
            </View>

            <View>
              <Text style={[pdfStyles.label, { color: primaryColor, marginBottom: 4 }]}>
                Colophon
              </Text>

              <Text style={[pdfStyles.paragraph, { color: primaryColor }]}>
                {`This document was NOT generated using a word processor or illustration program. Instead, a custom Next.js web app${hasJobDescription ? ' optimized the content against your job description using a GPT model, then' : ''} generated the PDF using the react-pdf library.`} 
              </Text>
            </View>
          </View>

          <View style={{ width: '50%' }}>
            <View style={[pdfStyles.section, pdfStyles.borderSection]}>
              <Text style={[pdfStyles.paragraph, pdfStyles.bold]}>
                Click on a topic below. If you have performed the ancient rite of printing, turn to the next page. 
              </Text>
            </View>

            <View style={[pdfStyles.section, pdfStyles.borderSection]}>
              <Link src={`#${resumeContent.skillsAndTech.id}`} style={[pdfStyles.heading, pdfStyles.link]}>
                {resumeContent.skillsAndTech.title}
              </Link>

              <View style={[pdfStyles.flexRowContainer, { flexWrap: 'wrap' }]}>
                {resumeContent.skillsAndTech.skills.map((skill, index) => {
                  return (
                    <Link key={index} src={`#${skill.id}`} style={[pdfStyles.link, pdfStyles.skillLink]}>
                      {skill.title}
                    </Link>
                  );
                })}
              </View>
            </View>

            <View style={[pdfStyles.section, pdfStyles.borderSection]}>
              <Link src={`#${resumeContent.experience.id}`} style={pdfStyles.heading}>
                {resumeContent.experience.title}
              </Link>

              {resumeContent.experience.experiences.map((experience, index) => {
                return (
                  <View key={index} style={{ marginBottom: 8 }}>
                    <Link src={`#${experience.id}`} style={[pdfStyles.subheading, pdfStyles.link]}>{experience.role}</Link>
                    <Text style={{ fontStyle: 'italic'}}>{experience.dates}</Text>
                  </View>
                );
              })}
            </View>

            <View style={[pdfStyles.section, pdfStyles.borderSection]}>
              <Link src="#recent-projects" style={pdfStyles.heading}>
                Recent Projects
              </Link>

              <View style={[pdfStyles.flexRowContainer, { flexWrap: 'wrap' }]}>
                {recentProjects.map((project, index) => {
                  return (
                    <View key={index} style={{ width: '28%', marginRight: 12 }}>
                      <Link src={`#${project.id}`}>
                        <View style={pdfStyles.projectThumb}>
                          {/* eslint-disable-next-line jsx-a11y/alt-text */}
                          <Image src={project.imgSrc} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 5.25 }} />
                        </View>
                      </Link>

                      <Link src={`#${project.id}`} style={[pdfStyles.link, { textDecoration: 'none' }]}>
                        {project.title}
                      </Link>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </Page>

      <Page size="LETTER" orientation="landscape" style={pdfStyles.page}>
        <View fixed style={[pdfStyles.flexRowContainer, { justifyContent: 'space-between', marginBottom: 18 }]}>
          <Text style={[pdfStyles.heading, { color: '#999999', textTransform: 'uppercase', letterSpacing: 2 }]}>
            Jason Cooper
          </Text>

          <Text
            style={{ color: '#999999', textTransform: 'uppercase', letterSpacing: 1 }}
            render={({ pageNumber, totalPages }) =>
              `Page ${pageNumber} of ${totalPages}`
            }
          >
          </Text>
        </View>

        <View style={pdfStyles.flexRowContainer}>
          <View style={{ width: '67%', marginRight: 60 }}>
              <View style={[pdfStyles.section]}>
                <Text id={resumeContent.skillsAndTech.id}></Text>
                <Text
                  fixed
                  style={pdfStyles.heading}
                  render={({ pageNumber }) =>
                    pageNumber === 2 ? resumeContent.skillsAndTech.title : `${resumeContent.skillsAndTech.title} (continued)`
                  }
                >
                </Text>

                {resumeContent.skillsAndTech.skills.map((skill, index) => {
                  if (skill.id === languagesAndFrameworks?.id || skill.id === tools?.id) {
                    return;
                  }

                  return (
                    <View key={index}>
                      <Text id={skill.id} style={pdfStyles.subheading}>
                        {skill.title}
                      </Text>

                      {markdownToPdfComponents(skill.text)}
                    </View>
                  );
                })}
              </View>
          </View>

          <View style={{ width: '33%' }}>
            <View style={[pdfStyles.section, pdfStyles.borderSection]}>
              <Text id={languagesAndFrameworks?.id}></Text>
              <Text style={pdfStyles.heading}>
                {languagesAndFrameworks?.title}
              </Text>

              {languagesAndFrameworks?.list.map((item, index) => {
                return (
                  <Text key={index} style={{ marginBottom: 6 }}>
                    {item}
                  </Text>
                );
              })}
            </View>

            <View style={[pdfStyles.section, pdfStyles.borderSection]}>
              <Text id={tools?.id}></Text>
              <Text style={pdfStyles.heading}>
                {tools?.title}
              </Text>

              {tools?.list.map((item, index) => {
                return (
                  <Text key={index} style={{ marginBottom: 6 }}>
                    {item}
                  </Text>
                );
              })}
            </View>
          </View>
        </View>
      </Page>

      <Page size="LETTER" orientation="landscape" style={pdfStyles.page}>
        <View fixed style={[pdfStyles.flexRowContainer, { justifyContent: 'space-between', marginBottom: 18 }]}>
          <Text style={[pdfStyles.heading, { color: '#999999', textTransform: 'uppercase', letterSpacing: 2 }]}>
            Jason Cooper
          </Text>

          <Text
            style={{ color: '#999999', textTransform: 'uppercase', letterSpacing: 1 }}
            render={({ pageNumber, totalPages }) =>
              `Page ${pageNumber} of ${totalPages}`
            }
          >
          </Text>
        </View>

        <View style={pdfStyles.flexRowContainer}>
          <View style={{ width: '67%', marginRight: 60 }}>
              <View style={[pdfStyles.section]}>
                <Text id={resumeContent.experience.id}></Text>
                <Text
                  fixed
                  style={pdfStyles.heading}
                  render={({ pageNumber }) =>
                    pageNumber === 4 ? resumeContent.experience.title : `${resumeContent.experience.title} (continued)`
                  }
                >
                </Text>

                {resumeContent.experience.experiences.map((experience, index) => {
                  return (
                    <View key={index}>
                      <Text id={experience.id} style={pdfStyles.subheading}>
                        {experience.role}, {experience.org}
                      </Text>

                      <Text style={{ fontStyle: 'italic'}}>{experience.dates}</Text>

                      {markdownToPdfComponents(experience.text)}
                    </View>
                  );
                })}
              </View>
          </View>

          <View style={{ width: '33%' }}>
            <View style={[pdfStyles.section, pdfStyles.borderSection]}>
              <Text style={pdfStyles.heading}>
                {resumeContent.recommendations.tab}
              </Text>

              {resumeContent.recommendations.recommendations.map((recommendation, index) => {
                return (
                  <View key={index} style={pdfStyles.section}>
                    <Text style={{ marginBottom: 6 }}>
                      {recommendation.text}
                    </Text>

                    <View style={{ marginLeft: 12, color: primaryColor }}>
                      <Text style={pdfStyles.label}>
                        {recommendation.title}
                      </Text>

                      <Text style={{ fontStyle: 'italic' }}>
                        {recommendation.relation}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </Page>

      <Page size="LETTER" orientation="landscape" style={pdfStyles.page}>
        <View fixed style={[pdfStyles.flexRowContainer, { justifyContent: 'space-between', marginBottom: 18 }]}>
          <Text style={[pdfStyles.heading, { color: '#999999', textTransform: 'uppercase', letterSpacing: 2 }]}>
            Jason Cooper
          </Text>

          <Text
            style={{ color: '#999999', textTransform: 'uppercase', letterSpacing: 1 }}
            render={({ pageNumber, totalPages }) =>
              `Page ${pageNumber} of ${totalPages}`
            }
          >
          </Text>
        </View>

        <View id="recent-projects" fixed style={[pdfStyles.flexRowContainer, { justifyContent: 'space-between' }]}>
            {recentProjects.map((project, index) => {
              return (
                <View key={index} id={project.id} style={{ width: '30%' }}>
                  <Text style={pdfStyles.heading}>
                    {project.title}
                  </Text>

                  <View style={{ borderWidth: 1,  borderStyle: 'solid', borderColor: '#cccccc', marginBottom: 18 }}>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image src={project.imgSrc} style={{ width: '100%' }} />
                  </View>

                  {markdownToPdfComponents(project.description)}

                  <Link src={`${baseUrl}${project.linkHref}`} style={pdfStyles.link}>
                    Read more on my website
                  </Link>
                </View>
              );
            })}
        </View>
      </Page>
    </Document>
  );
}
