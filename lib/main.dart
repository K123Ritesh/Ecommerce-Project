import 'package:amazon/Features/auth/Screens/auth_screen.dart';
import 'package:amazon/constants/global_varialbles.dart';
import 'package:amazon/router.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Amazon',
        theme: ThemeData(
            colorScheme: const ColorScheme.light(
                primary: GlobalVariables.secondaryColor),
            scaffoldBackgroundColor: GlobalVariables.backgroundColor,
            appBarTheme: AppBarTheme(
                elevation: 0, iconTheme: IconThemeData(color: Colors.black))),
        onGenerateRoute: (settings) => generateRoute(settings),
        home: AuthScreen());
  }
}
