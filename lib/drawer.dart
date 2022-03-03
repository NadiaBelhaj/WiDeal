import 'package:flutter/material.dart';
import 'package:login_ui_design/sendfeedback.dart';
import 'package:login_ui_design/settings.dart';

import 'About.dart';
import 'home.dart';
import 'events.dart';
import 'favorites.dart';
import 'my_drawer_header.dart';
import 'notifications.dart';

// ignore: camel_case_types
class myinterest extends StatefulWidget {
  @override
  _myinterestState createState() => _myinterestState();
}

// ignore: camel_case_types
class _myinterestState extends State<myinterest> {
  var currentPage = Drawersections.home;
  @override
  Widget build(BuildContext context) {
    var container;
    if (currentPage == Drawersections.home) {
      container = homePage();
    } else if (currentPage == Drawersections.favorites) {
      container = favoritesPage();
    } else if (currentPage == Drawersections.events) {
      container = eventsPage();
    } else if (currentPage == Drawersections.settings) {
      container = settingsPage();
    } else if (currentPage == Drawersections.notifications) {
      container = notificationPage();
    } else if (currentPage == Drawersections.about) {
      container = aboutPage();
    } else if (currentPage == Drawersections.send_feedback) {
      container = sendFeedbackPage();
    }
    return DefaultTabController(
        length: 200,
        child: new Scaffold(
          appBar: new AppBar(
            backgroundColor: Color(0xFFFF8A65),
          ),
          body: container,
          drawer: Drawer(
            child: SingleChildScrollView(
              child: Container(
                child: Column(
                  children: [
                    MyHeaderDrawer(),
                    MyDrawerList(),
                  ],
                ),
              ),
            ),
          ),
        ));
  }

  Widget MyDrawerList() {
    return Container(
      padding: EdgeInsets.only(
        top: 15,
      ),
      child: Column(
        children: [
          menuItems(1, "Home", Icons.home,
              currentPage == Drawersections.home ? true : false),
          menuItems(2, "Favorites", Icons.people_alt_outlined,
              currentPage == Drawersections.favorites ? true : false),
          menuItems(3, "Events", Icons.event,
              currentPage == Drawersections.events ? true : false),
          Divider(),
          menuItems(5, "Settings", Icons.settings_outlined,
              currentPage == Drawersections.settings ? true : false),
          menuItems(6, "Notifications", Icons.notifications_outlined,
              currentPage == Drawersections.notifications ? true : false),
          Divider(),
          menuItems(7, "About", Icons.privacy_tip_outlined,
              currentPage == Drawersections.about ? true : false),
          menuItems(8, "Send feedback", Icons.feedback_outlined,
              currentPage == Drawersections.send_feedback ? true : false),
        ],
      ),
    );
  }

  Widget menuItems(int id, String title, IconData icon, bool selected) {
    return Material(
        child: InkWell(
      onTap: () {
        Navigator.pop(context);
        setState(() {
          if (id == 1) {
            currentPage = Drawersections.home;
          } else if (id == 2) {
            currentPage = Drawersections.favorites;
          } else if (id == 3) {
            currentPage = Drawersections.events;
          } else if (id == 5) {
            currentPage = Drawersections.settings;
          } else if (id == 6) {
            currentPage = Drawersections.notifications;
          } else if (id == 7) {
            currentPage = Drawersections.about;
          } else if (id == 8) {
            currentPage = Drawersections.send_feedback;
          }
        });
      },
      child: Padding(
        padding: EdgeInsets.all(15.0),
        child: Row(
          children: [
            Expanded(
              child: Icon(
                icon,
                size: 20,
                color: Color(0xFFFF8A65),
              ),
            ),
            Expanded(
              flex: 3,
              child: Text(
                title,
                style: TextStyle(
                  color: Color(0xFFFF8A65),
                  fontSize: 16,
                ),
              ),
            ),
          ],
        ),
      ),
    ));
  }
}

enum Drawersections {
  home,
  favorites,
  events,
  settings,
  notifications,
  send_feedback,
  about,
}
