import {Link} from 'react-router-dom';
import styles from './NewsPage.Module.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import DATA from '../HomePage/DATA';
import Medeelist from '../../components/list/Medeelist';
import Typography from '@mui/material/Typography';
function Spider(){
   return <>
        <div className={styles.container_a}>
       <Typography>
       <h2 className={styles.header_a}> “Spider-Man: No Way Home” кино шүүмжлэгчдээс ӨНДӨР үнэлгээ авч байна</h2>
       </Typography>
       <div className={styles.row}>
           <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Mayu</Link><p>|Yolo.mn</p>
           <Box display="flex" justifyContent="space-between" float="right">
               <Button style={{ backgroundColor: "#4267b2", color: "white", fontSize: "11px", padding: "0 6px", height: "20px" }} variant="contained">
                   <ThumbUpIcon style={{ height: "15px" }} />
                   Like
                   3
               </Button>
               <Button style={{ backgroundColor: "#4267b2", color: "white", fontSize: "11px", height: "20px" }} variant="contained">Share</Button>
           </Box>
       </div>
       <p className={styles.p}>2021-12-10</p>
       <p className={styles.p}>Энэ жил үзэгчдийн дунд өндөр хүлээлт үүсэсэн дэлгэцийн уран бүтээлүүдийн нэгт “Spider-Man: No Way Home” яах аргагүй багтах билээ. Тэгвэл өчигдөр “Marvel” кино компанийн уг бүтээл АНУ-ын Лос Анжелес хотноо нээлтээ хийсэн нь үзэгчдийн таашаалд хүрчээ. </p>
       <img src='./spider.jpeg' alt='spider' className={styles.img} />
       <p className={styles.p}>Энэхүү бүтээл жүжигчин Tom Holland-ийн “Marvel”-ийн кино ертөнцөд Spider-Man-ий дүрийг бүтээсэн гурав дахь кино. Тэгвэл бүх Spider-Man-ийг нэгэн дороос харах боломжийг олгосон энэ кино үзэгчдийн хүлээлтэд хүрч чадсан бололтой. Учир нь Rotten Tomatoes вебсайтад 45 кино шүүмжлэгч уг киног үзсэн сэтгэгдлээ оруулсан бөгөөд дундаж үнэлгээ 100 хувь буюу гайхалтай өндөр байсан юм. </p>
       <iframe className={styles.img} src="https://www.youtube.com/embed/JfVOs4VSpmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <p className={styles.p}>“Spider-Man: No Way Home” кино маргааш буюу арванхоёрдугаар сарын 17-ны өдөр кинотеатруудад нээлтээ хийнэ. </p>
   </div>
   <div className={styles.footer}>
       
           <Link to="/news" className={styles.footer_image}>
               <h4 className={styles.h4}>#Боловсрол #Эссэ #Япон</h4>
           </Link>
           <Box display="flex" float="right">
               <Button style={{ backgroundColor: "#4267b2", color: "white", fontSize: "11px", padding: "0 6px", height: "20px" }} variant="contained">
                   <ThumbUpIcon style={{ height: "15px" }} />
                   Like
                   24
               </Button>
               <Button style={{ backgroundColor: "#4267b2", color: "white", fontSize: "11px", height: "20px" }} variant="contained">Share</Button>
           </Box>
           <div className={styles.header}>
               <Link to="/">
                   <img src="https://www.yolo.mn/stat/app/img/cata.png" alt="yolo_image" style={{ height: "30px" }} />
               </Link>
               <Link to="/sub">
                   <h2 className={styles.img_a}>#Санал болгох мэдээ</h2>
               </Link>
           </div>
               <Medeelist className={styles.container} meetups={DATA} />
       </div></>    
}

export default Spider;