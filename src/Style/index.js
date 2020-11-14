import { makeStyles } from '@material-ui/core';
const useStyle = makeStyles(() => ({
  content: {
    backgroundColor: 'red',
    color: '#FFFFFF',
    '& span': {
      fontSize: 15,
    },
  },
  title: {
    fontSize: 50,
  },
}));
export default useStyle;
