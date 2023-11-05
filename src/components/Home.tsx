import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import "./Bio.css";
import { ActiveTabsContext } from "./Main";

export default function Home() {

	const {activeTab, setActiveTab} = useContext(ActiveTabsContext);

	useEffect(()=>{
		setActiveTab("Home");
	  })

	return (
		<Container  sx = {{width : {xl : "85%", lg : "85%",md : "85%", sm : "95%" , xs : "100%"}}}>
			<Box>
				<Typography className="Salutation" variant="h6">
					Hello, I am Meng student at University of Waterloo.
				</Typography>
				<Grid container>
					<Grid item xs= {12}>
						<Typography>Kirtan Kanani</Typography>
					</Grid>
                    <Grid item xs = {12}>
                        <Typography>Full Stack Web Developer,Programmer,Competitive Coder, AI enthusiasit</Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minima, voluptas sed officiis non cumque rerum qui ratione magnam voluptatibus labore consequuntur culpa modi odio repellat quasi iusto. Earum, dolorem!
						Lluptatum libero earum quibusdam, iusto tempora expedita. Cumque consequatur, veniam debitis molestiae quam magni facilis, sunt assumenda facere, nemo sint ducimus eligendi quibusdam? Est eveniet tempora, sequi id quidem soluta maxime nostrum quos ratione nisi aspernatur fugiat quae repellat odit voluptatibus sunt. Praesentium commodi omnis delectus, soluta autem maiores doloribus eos est dolorem ab tempore quidem, fugiat architecto, explicabo iste voluptatibus recusandae enim aut consectetur ullam, recusandae laborum ab omnis porro quibusdam dolor aliquid, quod deleniti? Eveniet similique ex corrupti, saepe ullam eaque magnam deserunt cupiditate quae, alias amet, voluptate molestias est maiores mollitia accusamus incidunt architecto quas explicabo repellendus tempore. Provident nihil nulla, distinctio aliquam iusto eligendi id hic ipsum voluptatem! Debitis, quaerat amet labore quas iste quae officia ea nostrum veniam obcaecati natus vel beatae autem, adipisci magni tenetur commodi! Non maiores ad consequuntur ratione assumenda? Error delectus accusantium similique perspiciatis corporis debitis, quis eos minus explicabo totam ea quisquam nobis harum, libero deserunt in ab magni ut! Deserunt quo neque magni illum vero ex inventore architecto sequi commodi vitae asperiores, ad mollitia nesciunt pariatur dolore sit! Sunt velit quae nisi voluptates modi repellat dicta. Illo perspiciatis molestias magnam itaque ipsum sit iure possimus eius doloribus soluta similique, recusandae voluptatem beatae deserunt commodi molestiae iusto s iusto? Rerum ea, optio consequatur placeat voluptas numquam porro excepturi cumque ipsam, commodi doloribus unde eius libero sequi voluptatibus? Libero, ullam aliquid? Laudantium velit culpa rem fugit doloribus imi ducimus itaque incidunt ex vel sed vitae tempore adipisci sequi est voluptatum molestiae accusantium, at corporis, recusandae officiis qui eius dolore voluptatem fugiat quam cupiditate. Possimus vitae inventore fuga error praesentium dolorum sapiente corrupti nemo repellendus quos impedit molestias numquam veniam placeat quae incidunt, excepturi odit molestiae. Quasi nam soluta aspernatur repudiandae, ea ratione inventore itaque accusamus, deserunt unde rem, dicta mollitia nihil? Et odio possimus repellat reprehenderit quasi ex, similique debitis earum repellendus cumque officia! Nostrum, tempora modi sunt at animi nesciunt. Suscipit natus molestias vel minus beatae iusto laboriosam, magnam rerum modi repudiandae cupiditate delectus optio odit? Cupiditate pariatur eligendi aperiam modi quaerat dolor quisquam eum labore aliquid. Ex odit dolore atque et expedita laborum aliquam neque voluptatem, provident consequuntur! Odit maiores, obcaecati dolore voluptatum at eum ab, perspiciatis dolorum fugit ut fuga nulla commodi culpa quas molestiae dignissimos sunt pariatur accusamus iure quis, cum voluptatibus. At possimus voluptatem tempore a natus cumque sunt, illo ea quidem, hic ipsum praesentium illum et impedit aliquam laborum deleniti quas unde mollitia molestiae. Explicabo eos, dolores, fuga laudantium reprehenderit vitae, praesentium impedit animi accusantium tempora mollitia doloremque amet velit nam? Ducimus, architecto sapiente! Maiores nisi, error quasi animi quos molestiae vel exercitationem corrupti aliquid optio officia esse cumque illum rerum nam eius eligendi nobis voluptatum expedita quidem voluptas illo, autem eaque? Ipsum omnis fugiat, vero eum laudantium eaque officia quisquam! Placeat, doloremque?
                    </Grid>
				</Grid>
			</Box>
		</Container>
	);
}
