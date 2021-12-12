 import {Link} from 'react-router-dom';
 import styles from './NewsPage.Module.css'
 import ThumbUpIcon from '@mui/icons-material/ThumbUp';
 import { Button } from '@mui/material';
 import { Box } from '@mui/system';
 import DATA from '../HomePage/DATA';
 import Medeelist from '../../components/list/Medeelist';
function NewsPage(){
    return <div className={styles.container_a}>
                <h1 className={styles.header_a}>Японы тухай өөрийн дурсамжаасаа хуваалцана уу</h1>
                    <div className={styles.row}>
                        <Link to="/" style={{ textDecoration: 'none' }}>YOLO.mn </Link><p>|Yolo.mn</p>
                        <Box display="flex" justifyContent="space-between" float="right">
                        <Button style={{backgroundColor: "#4267b2", color:"white", fontSize:"11px", padding:"0 6px", height:"20px"}} variant="contained">
                            <ThumbUpIcon style={{height:"15px"}}/>
                            Like 
                            24
                            </Button>
                        <Button style={{backgroundColor: "#4267b2", color:"white", fontSize:"11px",height:"20px"}} variant="contained">Share</Button>
                        </Box>
                </div>   
                <p className={styles.p}>2021-12-10</p>
            <p className={styles.p}>Японы Элчин Сайдын Яамнаас Монгол Японы хооронд дипломат харилцаа тогтоосны 50 жилийн ойг тохиолдуулан “Монгол, Япон, Би, 50 дурсамж” сэдвээр мини-эссэ бичлэгийн уралдаан зарлаж байна.</p>
            <img src='https://www.yolo.mn/img/images/ck/2021/12/10/1-105400-1251242337.jpeg' alt='japan' className={styles.img}/>
            <p className={styles.p}>Ирэх онд Монгол Улс, Япон Улсын хооронд дипломат харилцаа тогтоосны 50 жилийн ойг тэмдэглэнэ. Одоогоор хоёр улсын хооронд чөлөөтэй зорчих боломжгүй хүнд нөхцөл байдал үргэлжилсээр байгаа ч өнөө үед интернетээр санал бодлоо хуваалцах боломж нээлттэй билээ. Ирэх онд тохиох энэхүү онцгой үйл явдлыг бүгдээрээ хөгжилтэйгөөр тэмдэглэн өнгөрүүлэх зорилгоор хаанаас ч оролцож болох цахим эвентийг бид зохион байгуулах гэж байна.</p>
            <p className={styles.p}>Япончуудтай харилцах, Япон орноор аялах үед төрсөн Японтой холбоо бүхий сэтгэл хөдөлгөм дурсамжуудыг бид энэхүү цахим эвентэд оролцуулах тул та өөрийн сайхан дурсамжаасаа бидэнтэй хуваалцана уу.</p>
            <p className={styles.p}>Та бүхний ирүүлсэн мини-эссэнүүдээс бид шилдэг 50-ийг Facebook болон Twitter хуудсаар дамжуулан нийтэд танилцуулахаар төлөвлөөд байна. Нэг пост бүрт нэг мини-эссэ тавигдах тул уншигч таны сэтгэлд хүрсэн бол "лайк" дараарай. Хамгийн олон лайк авсан мини-эссений эзэнд тус Элчин Сайдын Яамнаас бяцхан шагнал гардуулах болно.</p><p className={styles.p}>Оролцогчид доорх нөхцөлийг анхааралтай уншина уу.</p>
            <ul>
                <li>Хэн оролцох: Монгол Улс эсвэл Япон Улсын иргэн</li>
                <li>Хугацаа: ～2022 оны 11 дүгээр сарын сүүлийн өдөр хүртэл</li>
                <li>Агуулга: Японтой холбоотой сэтгэл хөдөлгөм дурсамж</li>
                <li>Хэмжээ: 50-300 үг (монгол хэл) / 100～500 үсэг (япон хэл)</li>
            </ul><p className={styles.p}>Холбогдох мэдээллийг “Эссэ илгээх маягт”-д бөглөх, эсвэл е-мэйлээр бичиж Японы ЭСЯ-ны Соёл, мэдээллийн хэлтэс (public.diplomacy-section@ul.mofa.go.jp)-т илгээнэ үү.</p><ul>
                <li>Таны хувийн мэдээлэл: овог, нэр (зохиогчийн нууц нэр байж болно), иргэний харьяалал, нас, хүйс, эрхэлсэн ажил</li>
                <li>Мини-эссэ</li>
            </ul><p className={styles.p}>Ирүүлсэн хувийн мэдээллийг доор дурдсанаас өөр зорилгоор ашиглахгүй:</p><ul>
                <li>Эссэ бичсэн хүнээс тодруулга авах, мэдээлэл хүргэх </li>
                <li>Ялагчид шагнал илгээх</li>
            </ul><p className={styles.p}>Бид эвентийн явцад ирүүлсэн хувийн мэдээллийг гуравдагч этгээдэд дамжуулахгүй хадгалах бөгөөд эвент дууссаны дараа зохих ёсоор бүрэн устгах болно.</p>
            <p className={styles.p}>Бусад мэдээллийг <Link target="_blank" to="https://https://www.mn.emb-japan.go.jp/itpr_ja/50jiliinoi_miniessay.html">https://www.mn.emb-japan.go.jp/itpr_ja/50jiliinoi_miniessay.html</Link> хуудаснаас авна уу.</p>
            <div className={styles.footer}>
                <Link to="/news">
                      #Боловсрол
                </Link>
                <Link to="/news">
                      #Эссэ 
                </Link>
                <Link to="/news">
                      #Япон
                </Link>
                <div className={styles.header}>
            <Link to="/">
                <img src="https://www.yolo.mn/stat/app/img/cata.png" alt="yolo_image" style={{ height: "30px" }} />
            </Link>
            <Link to="/sub">
                <h2 className={styles.img_a}>#Санал болгох мэдээ</h2>
            </Link>
            <Medeelist className={styles.container}meetups={DATA}/>
              </div>
            </div>
        </div>

    
}

export default NewsPage;