import megaphone from '../../assets/images/megaphone.png';
import handshake from '../../assets/images/handshake.png';
import calendar from '../../assets/images/calendar.png';
import chat from '../../assets/images/chat.png';
import whistle from '../../assets/images/whistle.png';
import dumbbell from '../../assets/images/dumbbell.png';

export const featureIntroData = [
  {
    id: 1,
    title: '커뮤니티',
    description: `코치와 회원이 자유롭게 소통해
    요. 모두가 커뮤니티를 개설
    할 수 있어요.`,
    image: megaphone,
  },
  {
    id: 2,
    title: '코치님 찾기',
    description: `다양한 코치님들을 한 곳에서
    비교하고 예약까지 쉽게할 수
    있어요.`,
    image: handshake,
  },
  {
    id: 3,
    title: '기록&달력',
    description: `스케쥴을 관리하고 운동 내역과
    식단을 기록할 수 있어요.`,
    image: calendar,
  },
  {
    id: 4,
    title: '채팅',
    description: `비대면으로 코치님과 상담할 수
    있어요. 커뮤니티 사람들과도
    채팅할 수 있어요.`,
    image: chat,
  },
];

export const userLinkData = [
  {
    id: 1,
    title: '코치를 위한 핏투',
    image: whistle,
    link: '#general-user',
  },
  {
    id: 2,
    title: '일반 회원을 위한 핏투',
    image: dumbbell,
    link: '#coach-user',
  },
];
