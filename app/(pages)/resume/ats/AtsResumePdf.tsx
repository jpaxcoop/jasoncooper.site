import { projectThumbs } from '@/data/project-thumbs';
import { resumeContent as resumeData } from '@/data/resume-content';
import { markdownToPdfComponents } from '@/utlis/markdownToPDF';
import { Document, Page, Text, View, Link } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer';
import { pdfStyles } from '../pdfStyles';

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
  resumeContent?: typeof resumeData;
};

export default function AtsResumePdf({ resumeContent = resumeData }: Props) {
  const languagesAndFrameworks = resumeContent.skillsAndTech.skills.find(skill => skill.id === 'languages-and-frameworks');
  const tools = resumeContent.skillsAndTech.skills.find(skill => skill.id === 'tools');

  return (
    <Document title="Jason Cooper | Resumé" author="Jason Cooper">
      <Page size="LETTER" orientation="portrait" style={pdfStyles.page}>
        <Text style={[pdfStyles.title, { fontSize: '18px', color: 'black' }]}>Resumé of Jason Cooper</Text>

        <Text style={pdfStyles.paragraph}>
          This resumé has been optimized for ATS consumption. For a resumé formatted for humans, please <Link src={`${baseUrl}/jason-cooper-resume.pdf`} style={pdfStyles.link}>download it here</Link>.
        </Text>

        <View style={[pdfStyles.section]}>
          <Text style={[pdfStyles.heading, { fontSize: '14px', color: 'black' }]}>Contact Information</Text>

          <Text style={pdfStyles.subheading}>Portfolio Website</Text>
          <Text style={{ marginBottom: '12px' }}>{baseUrl}</Text>

          <Text style={pdfStyles.subheading}>LinkedIn</Text>
          <Text style={{ marginBottom: '12px' }}>https://www.linkedin.com/in/jasonpaxtoncooper/</Text>

          <Text style={pdfStyles.subheading}>Phone Number</Text>
          <Text style={{ marginBottom: '12px' }}>706-255-2417</Text>

          <Text style={pdfStyles.subheading}>Email Address</Text>
          <Text style={{ marginBottom: '12px' }}>jasonpaxtoncooper@gmail.com</Text>

          <Text style={pdfStyles.subheading}>Address</Text>
          <Text style={{ marginBottom: '12px' }}>1480 Uncle Ben Drive, Powder Springs, GA 30127</Text>
        </View>

        <View style={[pdfStyles.section]}>
          <Text style={[pdfStyles.heading, { fontSize: '14px', color: 'black' }]}>Summary</Text>
          <Text style={pdfStyles.subheading}>{resumeContent.introduction.title}</Text>

          {markdownToPdfComponents(resumeContent.introduction.text)}
        </View>

        <View style={[pdfStyles.section]}>
          <Text style={[pdfStyles.heading, { fontSize: '14px', color: 'black' }]}>Skills</Text>

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

          {languagesAndFrameworks?.list.map((item, index) => {
            return (
              <Text key={index} style={{ marginBottom: 6 }}>
                {item}
              </Text>
            );
          })}

          {tools?.list.map((item, index) => {
            return (
              <Text key={index} style={{ marginBottom: 6 }}>
                {item}
              </Text>
            );
          })}
        </View>

        <View style={[pdfStyles.section]}>
          <Text style={[pdfStyles.heading, { fontSize: '14px', color: 'black' }]}>Work Experience</Text>

          {resumeContent.experience.experiences.map((experience, index) => {
            return (
              <View key={index}>
                <Text id={experience.id} style={pdfStyles.subheading}>
                  {experience.role}, {experience.org}
                </Text>

                <Text>{experience.ats_dates}</Text>

                {markdownToPdfComponents(experience.text)}
              </View>
            );
          })}
        </View>

        <View style={[pdfStyles.section]}>
          <Text style={[pdfStyles.heading, { fontSize: '14px', color: 'black' }]}>{resumeContent.recommendations.tab}</Text>

          {resumeContent.recommendations.recommendations.map((recommendation, index) => {
            return (
              <View key={index} style={pdfStyles.section}>
                <Text style={{ marginBottom: 6 }}>
                  {recommendation.text}
                </Text>

                <View style={{ marginLeft: 12 }}>
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
          <Text style={[pdfStyles.heading, { fontSize: '14px', color: 'black' }]}>Recent Projects</Text>

          {recentProjects.map((project, index) => {
              return (
                <View key={index} id={project.id}>
                  <Text style={[pdfStyles.heading, { fontSize: '14px', color: 'black' }]}>
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
