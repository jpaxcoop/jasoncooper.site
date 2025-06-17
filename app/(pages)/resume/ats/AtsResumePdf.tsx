import { projectThumbs } from '@/data/project-thumbs';
import { resumeContent } from '@/data/resumeContent';
import { markdownToPdfComponents } from '@/utlis/markdownToPDF';
import { Document, Page, Text, View, Link } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';
import { pdfStyles, primaryColor } from '../pdfStyles';

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

const languagesAndFrameworks = resumeContent.skillsAndTech.skills.find(skill => skill.id === 'languages-and-frameworks');
const tools = resumeContent.skillsAndTech.skills.find(skill => skill.id === 'tools');

export default function AtsResumePdf() {
  return (
    <Document title="Jason Cooper | Resumé" author="Jason Cooper">
      <Page size="LETTER" orientation="portrait" style={pdfStyles.page}>
        <Text style={pdfStyles.title}>Resumé of Jason Cooper</Text>

        <Text style={pdfStyles.paragraph}>
          This resumé has been optimized for ATS consumption. For a resumé formatted for humans, please download at <Link src={`${baseUrl}/jason-cooper-resume.pdf`} style={pdfStyles.link}>{`${baseUrl}/jason-cooper-resume.pdf`}</Link>
        </Text>

        <View style={[pdfStyles.section]}>
          <Text style={pdfStyles.heading}>Contact Information</Text>

          <Text>Website: {baseUrl}</Text>
          <Text>Phone: 706-255-2417</Text>
          <Text>Email: jasonpaxtoncooper@gmail.com</Text>
        </View>

        <View style={[pdfStyles.section]}>
          <Text style={pdfStyles.heading}>{resumeContent.introduction.title}</Text>

          {markdownToPdfComponents(resumeContent.introduction.text)}
        </View>

        <View style={[pdfStyles.section]}>
          <Text style={pdfStyles.heading}>{resumeContent.skillsAndTech.title}</Text>

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

        <View style={[pdfStyles.section]}>
          <Text style={pdfStyles.heading}>{languagesAndFrameworks?.title}</Text>

          {languagesAndFrameworks?.list.map((item, index) => {
            return (
              <Text key={index} style={{ marginBottom: 6 }}>
                {item}
              </Text>
            );
          })}
        </View>

        <View style={[pdfStyles.section]}>
          <Text style={pdfStyles.heading}>{tools?.title}</Text>

          {tools?.list.map((item, index) => {
            return (
              <Text key={index} style={{ marginBottom: 6 }}>
                {item}
              </Text>
            );
          })}
        </View>

        <View style={[pdfStyles.section]}>
          <Text style={pdfStyles.heading}>{resumeContent.experience.title}</Text>

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

        <View style={[pdfStyles.section]}>
          <Text style={pdfStyles.heading}>{resumeContent.recommendations.tab}</Text>

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

        <View style={[pdfStyles.section]}>
          <Text style={pdfStyles.heading}>Recent Projects</Text>

          {recentProjects.map((project, index) => {
              return (
                <View key={index} id={project.id}>
                  <Text style={pdfStyles.heading}>
                    {project.title}
                  </Text>

                  {markdownToPdfComponents(project.description)}
                </View>
              );
            })}
        </View>
      </Page>
    </Document>
  );
}
