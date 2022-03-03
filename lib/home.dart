import 'package:flutter/material.dart';

// ignore: camel_case_types
class homePage extends StatefulWidget {
  @override
  _homePageState createState() => _homePageState();
}

// ignore: camel_case_types
class _homePageState extends State<homePage> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: DefaultTabController(
        length: 2,
        child: Column(
          children: <Widget>[
            Container(
                constraints: BoxConstraints(maxHeight: 150.0),
                child: Material(
                  color: Color(0xFFFF8A65),
                  child: const TabBar(
                    tabs: <Widget>[
                      Tab(
                        child: Text("Discover"),
                      ),
                      Tab(
                        child: Text("nearby"),
                      ),
                    ],
                  ),
                ))
          ],
        ),
      ),
    );
  }
}
