import Header from "./Header";
import Shop from "./utils/Shop";
import ssmFront from './assets/ssm-front.png';
import ssmBack from './assets/ssm-back.png';

const Main = () => {
  return (
    <div className='main-container'>
      <Header />
      <div className='statement-container'>
        <div className='statement-wrapper'>
          <h1>Why us?</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur felis lorem, viverra lobortis velit semper at. Morbi nec ornare nibh, nec feugiat libero. Suspendisse vitae lorem eu lorem dignissim tempus. Nulla metus ipsum, semper quis mattis sit amet, viverra in lectus. Ut tortor odio, suscipit in viverra quis, facilisis in neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pharetra nisl at ex volutpat, non dignissim quam viverra. In pulvinar nulla ex, eget dignissim metus ultrices non. Duis non sodales arcu. Ut et nisi porttitor, luctus tellus a, varius massa. Duis at sagittis enim. Nam commodo, sem non convallis congue, turpis purus gravida neque, condimentum venenatis orci lectus sit amet metus. Morbi eget commodo dui. <br/> <br/>
          Aliquam maximus eros vel nunc tincidunt, quis sodales nisl volutpat. Maecenas ipsum nisl, aliquet nec pharetra ac, rhoncus id justo. Sed consequat est a diam dapibus, eget rutrum velit tincidunt. Nullam nec est non lacus suscipit convallis. Nam vitae molestie ex, quis porttitor elit. Curabitur mattis id lacus vel efficitur. Donec sed auctor purus. Mauris arcu libero, elementum a nisl a, maximus condimentum mi. Vestibulum laoreet mauris nec elit vestibulum, non varius sapien hendrerit. Nunc fermentum tempus tortor, sit amet ultricies lectus fermentum vel. Sed facilisis aliquet massa, a tincidunt sapien pharetra sed. Integer magna odio, ullamcorper sit amet eros vitae, iaculis commodo justo. <br/><br/>
          Nam bibendum volutpat accumsan. Suspendisse lacus purus, lobortis et eros a, bibendum volutpat erat. Nunc ut est congue, ornare arcu at, congue ante. Quisque urna nisl, posuere vitae tristique id, maximus quis metus. Duis venenatis turpis et arcu porttitor lobortis. Fusce luctus lectus augue, id luctus mauris aliquam vel. Vivamus nec orci fermentum, placerat tellus consectetur, sagittis augue. Donec mattis justo magna, vitae imperdiet magna varius sit amet. Praesent sed sapien id urna vestibulum luctus. Aliquam ut justo enim. Sed facilisis purus mattis odio elementum facilisis. Sed quis nisl ac odio auctor efficitur condimentum lobortis felis.<br/> <br/>
          Duis lacinia, sem id auctor vestibulum, nunc ex sollicitudin mauris, et iaculis elit lorem suscipit ipsum. Vestibulum eu dictum ante. Morbi fringilla nisi nec nisl maximus, et fringilla tortor rutrum. Phasellus iaculis diam ut rhoncus consequat. Nullam mi turpis, egestas id nisl id, feugiat auctor purus. Mauris vel aliquet orci. Quisque pretium convallis ex vel tempor. Mauris a lorem et lacus pretium bibendum. Vestibulum elementum mauris vel ipsum feugiat, at varius metus mollis. Vestibulum nibh ex, venenatis eget mauris quis, imperdiet dignissim enim. Proin aliquam, risus ut ornare mollis, lectus erat gravida nulla, nec hendrerit eros lorem eget turpis. Nullam et scelerisque velit. Aenean non lectus ultrices, sollicitudin massa et, placerat nibh.
          </p>
        </div>
      </div>
      <div className='shirt-container'>
        <div className='featured-shirt-container'>
          <h1>Vintage Tees</h1>
          <img className='apparel' src={ssmFront} alt='front shirt'></img>
          <img className='apparel' src={ssmBack} alt='back shirt'></img>
        </div>
        <Shop type='shirts' />
      </div>
    </div>
  )
}

export default Main;