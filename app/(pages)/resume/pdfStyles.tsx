import { StyleSheet } from '@react-pdf/renderer';

export const primaryColor = '#be185d';

export const pdfStyles = StyleSheet.create({
  page: {
    paddingHorizontal: 60,
    paddingVertical: 30,
    fontSize: 11,
    fontFamily: 'Nunito',
  },
  flexRowContainer: {
    flexDirection: 'row',
  },
  section: {
    marginBottom: 18,
  },
  borderSection: {
    borderLeft: 1,
    borderColor: '#cccccc',
    paddingLeft: 18,
  },
  title: {
    color: primaryColor,
    fontSize: 30,
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginBottom: 18,
  },
  heading: {
    color: primaryColor,
    fontSize: 14,
    fontFamily: 'Montserrat',
    marginBottom: 9,
    textDecoration: 'none',
  },
  subheading: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginBottom: 2,
    textDecoration: 'none',
  },
  label: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 9,
    textTransform: 'uppercase',
  },
  paragraph: { marginBottom: 12 },
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  link: { color: primaryColor },
  contactRow: {
    marginBottom: 3,
    alignItems: 'center',
    width: '100%',
  },
  list: {
    marginBottom: 8,
    paddingLeft: 12,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bullet: {
    width: 10,
    fontSize: 12,
    marginRight: 4,
  },
  listContent: {
    fontSize: 12,
    flex: 1,
  },
  skillLink: {
    borderColor: primaryColor,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 4,
    paddingVertical: 1,
    marginRight: 4,
    marginBottom: 4,
    textDecoration: 'none',
  },
  projectThumb: {
    borderWidth: 1,
    borderColor: primaryColor,
    borderRadius: 7,
    marginBottom: 6,
    height: 56,
    width: '100%',
  }
});
