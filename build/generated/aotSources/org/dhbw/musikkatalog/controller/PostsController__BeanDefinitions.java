package org.dhbw.musikkatalog.controller;

import org.dhbw.musikkatalog.repository.PostRepository;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link PostsController}.
 */
@Generated
public class PostsController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'postsController'.
   */
  private static BeanInstanceSupplier<PostsController> getPostsControllerInstanceSupplier() {
    return BeanInstanceSupplier.<PostsController>forConstructor(PostRepository.class)
            .withGenerator((registeredBean, args) -> new PostsController(args.get(0)));
  }

  /**
   * Get the bean definition for 'postsController'.
   */
  public static BeanDefinition getPostsControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(PostsController.class);
    beanDefinition.setInstanceSupplier(getPostsControllerInstanceSupplier());
    return beanDefinition;
  }
}
