import React from "react";
import { Text, ScrollView, View } from 'react-native';
import SearchBar from "components/SearchBar";
import PageWrapper from "components/PageWrapper";
import createStyle from "./css";
import Featured from "./Featured";
import Thumbnail from "./Thumbnail";
import Filter from "./Filter";
import PageContent from "../../components/PageContent";

export default function RecipesPage(props) {
  const styles = createStyle();
  const goToDetails = () => props.navigation.navigate("Recipes/Details");
  return <PageWrapper>
    <Featured />
    <SearchBar onChange={console.log} placeholder="Potražite recept..." />
    <PageContent>
      <Text style={styles.pageTitle}>Vreme je za večeru</Text>
      {/* Make component thumbnails that will render children and for last child remove margin right */}
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.thumbnails}>
        <Thumbnail onPress={goToDetails} image={require("images/temp/meal1.jpg")} />
        <Thumbnail onPress={goToDetails} image={require("images/temp/meal2.jpg")} />
        <Thumbnail onPress={goToDetails} image={require("images/temp/meal3.jpg")} />
        <Thumbnail onPress={goToDetails} image={require("images/temp/meal4.jpg")} />
        <Thumbnail onPress={goToDetails} image={require("images/temp/meal5.jpg")} />
        <Thumbnail onPress={goToDetails} thumbnailStyle={styles.noRightMargin} image={require("images/temp/meal6.jpg")} />
      </ScrollView>

      {/* <Text style={styles.pageTitle}>Vreme je za večeru</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.thumbnails}>
        <Thumbnail image={require("images/temp/meal11.jpg")} />
        <Thumbnail image={require("images/temp/meal12.jpg")} />
        <Thumbnail image={require("images/temp/meal13.jpg")} />
        <Thumbnail image={require("images/temp/meal14.jpg")} />
        <Thumbnail image={require("images/temp/meal15.jpg")} />
        <Thumbnail image={require("images/temp/meal16.jpg")} />
      </ScrollView> */}
      <Filter />
      <View style={styles.mediumThumbnails}>
        <Thumbnail onPress={goToDetails} thumbnailStyle={styles.mediumThumbnail} imageStyle={styles.mediumThumbnailImage} image={require("images/temp/meal7.jpg")} />
        <Thumbnail onPress={goToDetails} thumbnailStyle={styles.mediumThumbnail} imageStyle={styles.mediumThumbnailImage} image={require("images/temp/meal8.jpg")} />
        <Thumbnail onPress={goToDetails} thumbnailStyle={styles.mediumThumbnail} imageStyle={styles.mediumThumbnailImage} image={require("images/temp/meal9.jpg")} />
        <Thumbnail onPress={goToDetails} thumbnailStyle={styles.mediumThumbnail} imageStyle={styles.mediumThumbnailImage} image={require("images/temp/meal10.jpg")} />
        {/* <Thumbnail thumbnailStyle={styles.mediumThumbnail} imageStyle={styles.mediumThumbnailImage} image={require("images/temp/meal8.jpg")} /> */}
      </View>

      <Text style={styles.pageTitle}>Obradujte svoje mališane</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.thumbnails}>
        <Thumbnail onPress={goToDetails} image={require("images/temp/cake1.jpg")} />
        <Thumbnail onPress={goToDetails} image={require("images/temp/cake2.jpg")} />
        <Thumbnail onPress={goToDetails} image={require("images/temp/cake3.jpg")} />
        <Thumbnail onPress={goToDetails} image={require("images/temp/cake4.jpg")} />
        <Thumbnail onPress={goToDetails} image={require("images/temp/cake5.jpg")} />
        <Thumbnail onPress={goToDetails} thumbnailStyle={styles.noRightMargin} image={require("images/temp/cake6.jpg")} />
      </ScrollView>
    </PageContent>
    {/* <Button title="Recipes/Details" onPress={() => props.navigation.navigate("Recipes/Details")} /> */}
  </PageWrapper>
}